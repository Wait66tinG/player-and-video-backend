# from typing import List, Optional
#
# from pydantic import BaseModel
#
# class VideoBase(BaseModel):
#     title: str
#     description: Optional[str] = None
#
# class VideoCreate(VideoBase):
#     pass
#
# class Video(VideoBase):
#     id: int
#     owner_id: int
#
#     class Config:
#         orm_mode = True
#
# class PlayerBase(BaseModel):
#     name: str
#
#
# class PlayerCreate(PlayerBase):
#     password: str
#
#
# class Player(PlayerBase):
#     id: int
#     items: List[Video] = []
#
#     class Config:
#         orm_mode = True