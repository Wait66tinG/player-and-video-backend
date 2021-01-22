from sqlalchemy.orm import Session

from . import models

def get_player(db: Session):
    return db.query(models.Player).all()

def get_videos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Videos).offset(skip).limit(limit).all()

def get_video_by_bvid(db: Session, bvid:str):
    return db.query(models.Videos).filter(models.Videos.bvid == bvid).first()

def get_video_by_player(db: Session, player:str,page: int = 1,pagesize: int = 20):
    return db.query(models.Videos).filter(models.Videos.player == player).order_by(models.Videos.created.desc()).offset((page-1)*pagesize).limit(pagesize).all()

def create_player(db: Session, player):
    db_player = models.Player(name=player)
    db.add(db_player)
    db.commit()
    db.refresh(db_player)
    # return db_player

def create_player_video(db: Session, item):
    playerlist = list(get_player(db=db))
    for i in playerlist:
        if i.name in item["title"]:
            playername = i.name
            break
        else:
            playername = ''

    db_video = models.Videos(title=item["title"],
                            created=item["created"],
                            bvid=item["bvid"],
                            length=item["length"],
                            player=playername)
    db.add(db_video)
    db.commit()
    db.refresh(db_video)
    # return db_video



