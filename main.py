from fastapi import FastAPI, Depends
import requests
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from fastapi import Depends, FastAPI, HTTPException
from sql_app.database import SessionLocal, engine
from sql_app import models, crud, schemas
import math
import time
import datetime
from bs4 import BeautifulSoup
from typing import List
from fastapi.responses import JSONResponse
from fastapi import Cookie, FastAPI,Response,Header
from typing import Optional
import uuid

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

# 后台api允许跨域
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/getvideofromBILIBILI")
def GetData(db: Session = Depends(get_db)):
    headers = {
        "origin": "https://space.bilibili.com",
        "referer": "https://space.bilibili.com/39468424/video",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36"
    }
    fix_url = "https://api.bilibili.com/x/space/arc/search?mid=39468424&ps=30&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp"
    # 配置header和url

    r = requests.get(fix_url, headers, timeout=10)
    r.close()
    # 发送请求

    page = math.ceil(r.json()["data"]["page"]["count"] / r.json()["data"]["page"]["ps"])
    # 获得页数

    breakout = 1
    # 设置中止变量
    for i in range(page):
        # 循环页数爬取数据
        if breakout:
            get_url = f"https://api.bilibili.com/x/space/arc/search?mid=39468424&ps=30&tid=0&pn={i+1}&keyword=&order=pubdate&jsonp=jsonp"
            r = requests.get(get_url, headers, timeout=10)
            temp_data = r.json()["data"]["list"]["vlist"]
            time.sleep(5)
            for j in temp_data:
                # 取出单条数据
                if crud.get_video_by_bvid(db=db, bvid=j["bvid"]):
                    breakout = 0
                    print("本条数据已经存在",j["title"])
                    break
                else:
                    crud.create_player_video(db=db, item=j)
    return "update success"
    # for i in crud.get_player(db=db):
    #     print(i["name"])
    # return r.json()["data"]["list"]["vlist"][0]["bvid"]
    # return crud.get_player(db=db)

@app.get("/creatPlayers")
def creatPlayers(db: Session = Depends(get_db)):
    playerList = ["INnoVation", "Rogue", "ByuN", "soO", "sOs", "Stats", "Dark",
                  "Maru", "TY", "Zest", "PartinG", "SHOWTIME", "Serral", "Solar",
                  "UThermal", "XY", "TIME", "HeroMaRinE", "printf", "SuperNova",
                  "Trap", "Cure", "Stephano", "RagnaroK", "Clem", "Reynor", "MaxPax",
                  "Dream", "Cyan", "Scarlett", "Cloudy", "Zoun", "Special", "Neeb",
                  "XiGua", "Lambo"]
    for i in playerList:
        crud.create_player(db=db, player=i)

@app.get("/getPlayers")
def getPlayers(db: Session = Depends(get_db)):
    return crud.get_player(db=db)

@app.get("/getWinprobability")
def getWinprobability(db: Session = Depends(get_db)):
    r = requests.get("http://aligulac.com/periods/latest/", timeout=10)
    r.close()
    tag = BeautifulSoup(r.text, 'html.parser').find_all('table')[4]('td')
    dict1 = {}
    dict1['number'] = tag[11].text
    dict1["PVT"] = tag[13].text
    dict1["PVZ"] = tag[15].text
    dict1["TVZ"] = tag[17].text
    dict1["date"] = str(datetime.date.today())
    if crud.get_winprobability_date(db=db,date=str(datetime.date.today())):
        pass
    else:
        crud.creat_winprobability(db=db,item=dict1)


@app.get("/getWinprobability1")
def getWinprobability1(db: Session = Depends(get_db)):
    return crud.get_winprobability_ID(db=db)

@app.get("/getNewReport")
def getNewReport(db: Session = Depends(get_db)):
    return crud.get_videos(db=db)

@app.get("/getPlayersVideo")
def getPlayersVideo(player:str,page:int = 1,pagesize:int = 1000,db: Session = Depends(get_db)):
    return crud.get_video_by_player(db=db,player=player,page=page,pagesize=pagesize)

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=200, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.post("/users/login", response_model=schemas.User)
def read_user(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user and db_user.hashed_password==user.password:
        a = str(uuid.uuid1())
        # response.set_cookie(key="session", value=a)
        crud.create_cookie(db=db, data='Bearer '+a,user_id=db_user.id)
        db_user.token = a
        return db_user
    else:
        raise HTTPException(status_code=200, detail="User not found or wrong password")

@app.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/items/", response_model=schemas.Item)
def create_item_for_user(
    user_id: int, item: schemas.ItemCreate, db: Session = Depends(get_db)
):
    return crud.create_user_item(db=db, item=item, user_id=user_id)


@app.get("/items/", response_model=List[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items

@app.get("/items/cookie",response_model=schemas.User)
async def read_items(authorization: Optional[str] = Header(None),db: Session = Depends(get_db)):
    # print(authorization)
    if crud.get_cookie(db=db,data=authorization):
        user_id = crud.get_cookie(db=db, data=authorization).user_id
        db_user = crud.get_user(db, user_id=user_id)
        return db_user
    else:
        raise HTTPException(status_code=200, detail="not login")

@app.get("/getDiscussByPlayer")
def getDiscussByPlayer(player:int,db: Session = Depends(get_db)):
    return crud.get_discuss_by_player(db=db,player=player)
#
@app.get("/getDiscussByUser")
def getDiscussByUser(userid:int,db: Session = Depends(get_db)):
    return crud.get_discuss_by_user(db=db,user=userid)
    # pass
@app.post("/postDiscuss/",response_model=schemas.Discuss)
def postDiscuss(discuss: schemas.Discuss, db: Session = Depends(get_db)):

    return crud.create_discuss(db=db, discuss=discuss)
    # pass

# @app.post("/users/", response_model=schemas.User)
# def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
#     db_user = crud.get_user_by_email(db, email=user.email)
#     if db_user:
#         raise HTTPException(status_code=200, detail="Email already registered")
#     return crud.create_user(db=db, user=user)