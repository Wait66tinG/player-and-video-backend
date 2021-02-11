from sqlalchemy.orm import Session

from . import models ,schemas

# user
def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password
    db_user = models.User(
        email=user.email,
        hashed_password=fake_hashed_password,
        name=user.name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Item).offset(skip).limit(limit).all()

def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
    db_item = models.Item(**item.dict(), owner_id=user_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# player and video
def get_player(db: Session):
    return db.query(models.Player).all()

def get_videos(db: Session, skip: int = 0, limit: int = 12):
    return db.query(models.Videos).order_by(models.Videos.created.desc()).limit(limit).all()

def get_video_by_bvid(db: Session, bvid:str):
    return db.query(models.Videos).filter(models.Videos.bvid == bvid).first()

def get_video_by_player(db: Session, player:str,page: int = 1,pagesize: int = 20):
    return db.query(models.Videos).filter(models.Videos.player == player).order_by(models.Videos.created.desc()).offset((page-1)*pagesize).limit(pagesize).all()

def create_player(db: Session, player):
    db_player = models.Player(
        name=player['name'],
        race=player['race'],
        realname=player['realname'],
        nickname=player['nickname'],
        country=player['country'],
    )
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

    db_video = models.Videos(
        title=item["title"],
        created=item["created"],
        bvid=item["bvid"],
        length=item["length"],
        player=playername,
         )
    db.add(db_video)
    db.commit()
    db.refresh(db_video)
    # return db_video

def find_player(db: Session, player):
    return db.query(models.Player).filter(models.Player.name == player).first()

# winprobability

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

# login

def get_cookie(db: Session, data:str):
    return db.query(models.cookie).filter(models.cookie.context == data).first()

def create_cookie(db: Session, data:str,user_id:int):
    db_cookie = models.cookie(
        user_id = user_id,
        context = data,
    )
    db.add(db_cookie)
    db.commit()
    db.refresh(db_cookie)
    return db.query(models.cookie).filter(models.cookie.context == data).first()

# discuss

def create_discuss(db: Session, discuss):
    db_discuss=models.Discuss(
        player=discuss.player,
        user=discuss.user,
        date=discuss.date,
        context=discuss.context,
    )
    db.add(db_discuss)
    db.commit()
    db.refresh(db_discuss)
    return discuss

# def create_user(db: Session, user: schemas.UserCreate):
#     fake_hashed_password = user.password
#     db_user = models.User(
#         email=user.email,
#         hashed_password=fake_hashed_password,
#         name=user.name)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user

def get_discuss_by_player(db: Session, player:int):
    return db.query(models.Discuss).filter(models.Discuss.player == player).order_by(models.Discuss.date.desc()).all()
# def get_discuss_by_player(db: Session, player:int):
#     return db.query(models.Discuss).filter(models.Discuss.player == player).order_by(models.Discuss.date.desc()).all()
#
def get_discuss_by_user(db: Session, user:int):
    return db.query(models.Discuss).filter(models.Discuss.user == user).order_by(models.Discuss.date.desc()).all()