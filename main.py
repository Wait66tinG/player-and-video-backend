from fastapi import FastAPI, Depends
import requests
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware

from sql_app.database import SessionLocal, engine
from sql_app import models, crud
import math
import time
from streamlink import Streamlink


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

@app.get("/getPlayersVideo")
def getPlayersVideo(player:str,page:int = 1,pagesize:int = 1000,db: Session = Depends(get_db)):
    return crud.get_video_by_player(db=db,player=player,page=page,pagesize=pagesize)