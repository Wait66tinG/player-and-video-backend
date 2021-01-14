import pymysql
pymysql.install_as_MySQLdb()
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "mysql://yyj:123456qwerty@localhost:3306/videolist?charset=utf8"
#连接到数据库
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
#实例化一个数据库引擎
SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()
#实例化数据库模型