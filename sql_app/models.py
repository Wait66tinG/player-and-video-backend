from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
import datetime
from .database import Base


class Player(Base):
    __tablename__ = "players"


    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), unique=True, index=True)


    # videos = relationship("Videos", back_populates="owner")
class winprobability(Base):
    __tablename__ = "winprobability"
    id = Column(Integer, primary_key=True, index=True)
    date = Column(String(255), unique=True, index=True)
    number = Column(Integer)
    PVT =Column(String(255))
    PVZ =Column(String(255))
    TVZ =Column(String(255))

class Videos(Base):
    __tablename__ = "videos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), index=True)
    created = Column(Integer)
    bvid = Column(String(255))
    length = Column(String(255))
    # owner_id = Column(Integer, ForeignKey("players.id"))
    player = Column(String(255))
    # owner = relationship("Player", back_populates="videos")