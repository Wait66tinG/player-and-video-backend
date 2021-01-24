from sqlalchemy.orm import Session

from . import models

def get_player(db: Session):
    return db.query(models.Player).all()

def get_videos(db: Session, skip: int = 0, limit: int = 12):
    return db.query(models.Videos).order_by(models.Videos.created.desc()).limit(limit).all()

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
        player=playername,
         )
    db.add(db_video)
    db.commit()
    db.refresh(db_video)
    # return db_video

def get_winprobability_date(db: Session, date:str):
    return db.query(models.winprobability).filter(models.winprobability.date == date).first()

def get_winprobability_ID(db: Session):
    return db.query(models.winprobability).order_by(models.winprobability.id.desc()).first()

def creat_winprobability(db: Session, item):
    db_winprobability = models.winprobability(
        date=item["date"],
        number=item['number'],
        PVT=item['PVT'],
        PVZ = item['PVZ'],
        TVZ = item['TVZ'],
    )
    db.add(db_winprobability)
    db.commit()
    db.refresh(db_winprobability)
    return "success"

