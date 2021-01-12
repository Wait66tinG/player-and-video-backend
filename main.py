from fastapi import FastAPI, Depends
import requests
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles

from sql_app.database import SessionLocal, engine
from sql_app import models, crud
import math
from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

# origins = [
#
#     "http://localhost:4200",
# ]
#
# 后台api允许跨域
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/getdata")
def GetData(db: Session = Depends(get_db)):
    headers = {
        "origin": "https://space.bilibili.com",
        "referer": "https://space.bilibili.com/39468424/video",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36"
    }
    fix_url = "https://api.bilibili.com/x/space/arc/search?mid=39468424&ps=30&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp"
    r = requests.get(fix_url, headers, timeout=10)
    r.close()
    whole_data = []
    page = math.ceil(r.json()["data"]["page"]["count"] / r.json()["data"]["page"]["ps"])
    for i in range(page):
        get_url = f"https://api.bilibili.com/x/space/arc/search?mid=39468424&ps=30&tid=0&pn={i + 1}&keyword=&order=pubdate&jsonp=jsonp"
        r = requests.get(get_url, headers, timeout=10)
        temp_data = r.json()["data"]["list"]["vlist"]
        whole_data.extend(temp_data)
    return crud.create_user_item(db=db, item=whole_data)


@app.get("/searchdata")
def SearchData(title:str,db: Session = Depends(get_db)):
    return crud.get_title(db=db,title=title)

@app.get("/get")
def test():
    testdata = [{
        "id": 1,
        "name": "XY",
        "video_list": []
    }]
    return testdata