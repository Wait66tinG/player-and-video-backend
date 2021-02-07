from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
import datetime
from .database import Base


class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), unique=True, index=True)

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
    player = Column(String(255))

class Discuss(Base):
    __tablename__ = "discuss"

    id = Column(Integer, primary_key=True, index=True)
    player = Column(Integer)
    user = Column(Integer)
    date = Column(Integer)
    context = Column(String(255))

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    name = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    is_active = Column(Boolean, default=True)

    items = relationship("Item", back_populates="owner")


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    context = Column(String(255), index=True)
    description = Column(String(255), index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")

class cookie(Base):
    __tablename__ = "cookie"

    id = Column(Integer, primary_key=True, index=True)
    context = Column(String(255), index=True)
    user_id = Column(String(255), index=True)