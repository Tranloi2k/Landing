import service.mysql_connect_service.connect_mql as cnn
import paginate

def get_all_news():
    db = cnn.connect()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM News")
    columns = cursor.description
    result = []
    for value in cursor.fetchall():
        tmp = {}
        for (index,column) in enumerate(value):
            tmp[columns[index][0]] = column
        result.append(tmp)
    cursor.close()
    db.close()
    return result

def get_all_news_pagination(page, items_per_page):
    db = cnn.connect()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM News")
    columns = cursor.description
    result = []
    for value in cursor.fetchall():
        tmp = {}
        for (index,column) in enumerate(value):
            tmp[columns[index][0]] = column
        result.append(tmp)
    cursor.close()
    db.close()
    p = paginate.Page(result, page=page, items_per_page=items_per_page)
    print(p.page_count)
    return {'data': p.items, 'current_page': p.page,'number_of_page': p.page_count}


def add_new( Name,Link,ShortDescription,BannerImage,Title,Author,TimeNew,Content):
    db = cnn.connect()
    sql = "INSERT INTO News (Name,Link,ShortDescription,BannerImage,Title,Author,TimeNew,Content) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    val = (Name,Link,ShortDescription,BannerImage,Title,Author,TimeNew,Content)
    cursor = db.cursor()
    cursor.execute(sql, val)
    cursor.lastrowid
   
    cursor.execute("SELECT * FROM News WHERE NewId = " + str(cursor.lastrowid))
    columns = cursor.description
    result = []
    for value in cursor.fetchall():
        tmp = {}
        for (index,column) in enumerate(value):
            tmp[columns[index][0]] = column
        result.append(tmp)
    cursor.close()
    db.commit()
    db.close()
    return result
    
def update_new(NewId, Name,Link,ShortDescription,BannerImage,Title,Author,TimeNew,Content):
    db = cnn.connect()
    sql = "UPDATE News SET Name = %s,Link= %s,ShortDescription= %s,BannerImage= %s,Title= %s,Author= %s,TimeNew= %s,Content= %s WHERE NewId = %s"
    val = (Name,Link,ShortDescription,BannerImage,Title,Author,TimeNew,Content, NewId)
    cursor = db.cursor()
    cursor.execute(sql, val)
    cursor.execute("SELECT * FROM News WHERE NewId = " + str(NewId))
    columns = cursor.description
    result = []
    for value in cursor.fetchall():
        tmp = {}
        for (index,column) in enumerate(value):
            tmp[columns[index][0]] = column
        result.append(tmp)
    cursor.close()
    db.commit()
    db.close()
    return result

def delele_new(NewId):
    db = cnn.connect()
    cursor = db.cursor()
    sql = "DELETE FROM News WHERE NewId = " + str(NewId)
    cursor.execute(sql)
    cursor.close()
    db.commit()
    db.close()
    return "Deleted product with NewId = "+ str(NewId)