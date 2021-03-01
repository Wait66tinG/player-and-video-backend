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

@app.get("/creatPlayers")
def creatPlayers(db: Session = Depends(get_db)):
    playerList = [{"name":"INnoVation",
                   "race":"人族",
                   "realname":"이신형",
                   "nickname":"吕布",
                   "country":"韩国",},
                  {"name":"Rogue",
                   "race":"虫族",
                   "realname":"이병렬",
                   "nickname":"脑虫",
                   "country":"韩国",},
                  {"name":"ByuN",
                   "race":"人族",
                   "realname":"변현우",
                   "nickname":"武圣",
                   "country":"韩国",},
                  {"name":"soO",
                   "race":"虫族",
                   "realname":"어윤수",
                   "nickname":"输本",
                   "country":"韩国",},
                  {"name":"sOs",
                   "race":"神族",
                   "realname":"김유진",
                   "nickname":"狗哥",
                   "country":"韩国",},
                  {"name":"Stats",
                   "race":"神族",
                   "realname":"김대엽",
                   "nickname":"拔本，大勇哥",
                   "country":"韩国",
                   },
                  {"name":"Dark",
                   "race":"虫族",
                   "realname":"박령우",
                   "nickname":"",
                   "country":"韩国",},
                  {"name":"Maru",
                   "race":"人族",
                   "realname":"조성주",
                   "nickname":"小天使",
                   "country":"韩国",
                   },
                  {"name":"TY",
                   "race":"人族",
                   "realname":"전태양",
                   "nickname":"全太阳",
                   "country":"韩国",
                   },
                  {"name":"Zest",
                   "race":"神族",
                   "realname":"주성욱",
                   "nickname":"王者归来",
                   "country":"韩国",
                   },
                  {"name":"PartinG",
                   "race":"神族",
                   "realname":"원이삭",
                   "nickname":"跳跳",
                   "country":"韩国",
                   },
                  {"name":"ShoWTimE",
                   "race":"神族",
                   "realname":"Tobias Sieber",
                   "nickname":"",
                   "country":"德国",
                   },
                  {"name":"Serral",
                   "race":"虫族",
                   "realname":"Joona Sotala",
                   "nickname":"主宰，高尔夫运动员，星际爱好者",
                   "country":"芬兰",
                   },
                  {"name":"Solar",
                   "race":"虫族",
                   "realname":"강민수",
                   "nickname":"",
                   "country":"韩国",
                   },
                  {"name":"UThermal",
                   "race":"人族",
                   "realname":"Marc Schlappi",
                   "nickname":"",
                   "country":"荷兰",
                   },
                  {"name":"XY",
                   "race":"人族",
                   "realname":"向瑶",
                   "nickname":"鸟哥",
                   "country":"中国",
                   },
                  {"name":"TIME",
                   "race":"人族",
                   "realname":"李培楠",
                   "nickname":"野人",
                   "country":"中国",
                   },
                  {"name":"HeroMaRinE",
                   "race":"人族",
                   "realname":"Gabriel Raffaele Segat",
                   "nickname":"河马",
                   "country":"德国",
                   },
                  {"name":"printf",
                   "race":"神族",
                   "realname":"Dylan Ramsay",
                   "nickname":"地堡王",
                   "country":"美国、加拿大",
                   "team":"",},
                  {"name":"SuperNova",
                   "race":"人族",
                   "realname":"김영진",
                   "nickname":"女妖王",
                   "country":"韩国",
                   },
                  {"name":"Trap",
                   "race":"神族",
                   "realname":"조성호",
                   "nickname":"扛旗人",
                   "country":"韩国",
                   },
                  {"name":"Cure",
                   "race":"人族",
                   "realname":"김도욱",
                   "nickname":"",
                   "country":"韩国",
                   },
                  {"name":"Stephano",
                   "race":"虫族",
                   "realname":"Ilyes Satouri",
                   "nickname":"法虫",
                   "country":"法国",
                   },
                  {"name":"RagnaroK",
                   "race":"虫族",
                   "realname":"신희범",
                   "nickname":"",
                   "country":"韩国",
                   },
                  {"name":"Clem",
                   "race":"人族",
                   "realname":"Clément Desplanches",
                   "nickname":"小法人",
                   "country":"法国",
                   },
                  {"name":"Reynor",
                   "race":"虫族",
                   "realname":"Riccardo Romiti",
                   "nickname":"",
                   "country":"意大利",
                   },
                  {"name":"MaxPax",
                   "race":"神族",
                   "realname":"",
                   "nickname":"",
                   "country":"丹麦",
                   },
                  {"name":"Dream",
                   "race":"人族",
                   "realname":"조중혁",
                   "nickname":"梦本",
                   "country":"韩国",
                   },
                  {"name":"Cyan",
                   "race":"神族",
                   "realname":"黄旻",
                   "nickname":"探机",
                   "country":"中国",
                   },
                  {"name":"Scarlett",
                   "race":"虫族",
                   "realname":"Sasha Hostyn",
                   "nickname":"噶姐",
                   "country":"加拿大",
                   },
                  {"name":"Cloudy",
                   "race":"神族",
                   "realname":"高源",
                   "nickname":"茂神",
                   "country":"中国",
                   },
                  {"name": "Zoun",
                   "race": "神族",
                   "realname": "박한솔",
                   "nickname": "",
                   "country": "韩国",
                   },
                  {"name": "Special",
                   "race": "人族",
                   "realname": "Juan Carlos Tena Lopez",
                   "nickname": "肥宅",
                   "country": "墨西哥",
                   },
                  {"name": "Neeb",
                   "race": "神族",
                   "realname": "Alex Sunderhaft",
                   "nickname": "",
                   "country": "美国",
                   },
                  {"name": "XiGua",
                   "race": "虫族",
                   "realname": "王磊",
                   "nickname": "瓜宗，小主宰",
                   "country": "中国",
                   },
                  {"name": "Lambo",
                   "race": "虫族",
                   "realname": "Julian Brosig",
                   "nickname": "",
                   "country": "德国",
                   }]
    for i in playerList:
        crud.create_player(db=db, player=i)

@app.get("/getPlayers")
def getPlayers(db: Session = Depends(get_db)):
    return crud.get_player(db=db)

@app.get("/getDiscussPlayer")
def getDiscussPlayer(playerid:int,db: Session = Depends(get_db)):
    return crud.get_player_by_id(db=db,player_id=playerid)

@app.get("/getPlayerData")
def find_player(player:str,db: Session = Depends(get_db)):
    return crud.find_player(db=db,player=player)

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
    user_id: int, item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.create_user_item(db=db, item=item, user_id=user_id)


@app.get("/items/", response_model=List[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items

@app.get("/items/cookie",response_model=schemas.User)
async def read_items(authorization: Optional[str] = Header(None),db: Session = Depends(get_db)):
    if crud.get_cookie(db=db,data=authorization):
        user_id = crud.get_cookie(db=db, data=authorization).user_id
        db_user = crud.get_user(db, user_id=user_id)
        return db_user
    else:
        raise HTTPException(status_code=200, detail="not login")

@app.get("/getDiscussByPlayer")
def getDiscussByPlayer(player:int,db: Session = Depends(get_db)):
    data = []
    for i in range(len(crud.get_discuss_by_player(db=db, player=player))):
        dic = {'player': 0, 'user': '', 'date': 0, 'context': '', }
        temp = crud.get_user(db=db,user_id=crud.get_discuss_by_player(db=db, player=player)[i].user).name
        dic['player'] = crud.get_discuss_by_player(db=db, player=player)[i].player
        dic['id'] = crud.get_discuss_by_player(db=db, player=player)[i].id
        dic['userid'] = crud.get_discuss_by_player(db=db, player=player)[i].user
        dic['user'] = temp
        dic['date'] = crud.get_discuss_by_player(db=db, player=player)[i].date
        dic['context'] = crud.get_discuss_by_player(db=db, player=player)[i].context
        data.append(dic)
    if crud.get_discuss_by_player(db=db,player=player) is None:
        raise HTTPException(status_code=200, detail=None)
    return data



@app.get("/getDiscussByUser")
def getDiscussByUser(userid:int,db: Session = Depends(get_db)):
    data = []
    for i in range(len(crud.get_discuss_by_user(db=db, user=userid))):
        dic = {'player': 0, 'user': '', 'date': 0, 'context': '', }
        temp = crud.get_player_by_id(db=db,player_id=crud.get_discuss_by_user(db=db, user=userid)[i].player)[0].name
        dic['player'] = temp
        dic['id'] = crud.get_discuss_by_user(db=db, user=userid)[i].id
        dic['user'] = crud.get_discuss_by_user(db=db, user=userid)[i].player
        dic['date'] = crud.get_discuss_by_user(db=db, user=userid)[i].date
        dic['context'] = crud.get_discuss_by_user(db=db, user=userid)[i].context
        data.append(dic)
    if crud.get_discuss_by_user(db=db, user=userid) is None:
        raise HTTPException(status_code=200, detail=None)
    return data

@app.get("/getDiscussById")
def getDiscussById(id:int,db: Session = Depends(get_db)):
    return crud.get_discuss_by_id(db=db,discuss_id=id)

@app.post("/discuss/post/")
def postDiscuss(discuss: schemas.Discuss, db: Session = Depends(get_db)):
    discuss.date =int(time.time())
    return crud.create_discuss(db=db, discuss=discuss)

@app.get("/test/")
def test(i: int, db: Session = Depends(get_db)):
    return crud.get_user(db=db, user_id=crud.get_discuss_by_player(db=db, player=2)[i].user).name

@app.put("/discuss/delete/")
def deleteDiscuss(id: int, db: Session = Depends(get_db)):
    discuss = crud.get_discuss_by_id(db=db, discuss_id=id)
    if discuss is None:
        raise HTTPException(status_code=200, detail="discuss already delete")
    else:
        crud.delete_discuss_by_id(db=db, id=id)
    return "success"
