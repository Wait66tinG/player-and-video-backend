import pymysql


def DefindDatabase():
    db = pymysql.connect(host='localhost', user='root', password='123456', port=3306)
    cursor = db.cursor()
    cursor.execute("CREATE DATABASE videolist DEFAULT CHARACTER SET utf8")
    db.close()

def InsertData():
    db = pymysql.connect(host='localhost', user='root', password='123456', port=3306)
    cursor = db.cursor()
    # while


DefindDatabase()