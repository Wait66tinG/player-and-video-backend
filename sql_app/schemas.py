from typing import List, Optional

from pydantic import BaseModel

class ItemBase(BaseModel):
    title: str
    description: Optional[str] = None

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True

class Discuss(BaseModel):
    player: int
    user: int
    date: int
    context: str

class UserCreate(BaseModel):
    email: str
    password: str
    name: str

class UserLogin(BaseModel):
    email: str
    password: str

class User(BaseModel):
    id: int
    is_active: bool
    items: List[Item] = []
    name:str
    email: str
    token:Optional[str]
    class Config:
        orm_mode = True