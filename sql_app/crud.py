from sqlalchemy.orm import Session

from . import models, schemas


def get_title(db: Session, title: str):
    return db.query(models.videodatas).filter(models.videodatas.title == title).first()

def get_players_videodata(db: Session, player: str):
    db.query(models.videodatas).filter()

def create_user_item(db: Session, item):
    for i in item:
        db_item = models.videodatas(title = i["title"],created = i["created"],bvid = i["bvid"],length = i["length"],)
        db.add(db_item)
        db.commit()
    # return db_item
