from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


# class Player(Base):
#     __tablename__ = "players"
#
#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String(255), unique=True, index=True)
#
#     videos = relationship("Videos", back_populates="owner")

class videodatas(Base):
    __tablename__ = "videodatas"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), index=True)
    created = Column(Integer)
    bvid = Column(String(255))
    length = Column(String(255))

    # players = relationship("Player", back_populates="videos")