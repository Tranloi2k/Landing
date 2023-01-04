import service.mysql_connect_service.connect_mql as cnn
import paginate

def get_all_products():
    db = cnn.connect()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM Products")
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

def get_all_products_pagination(page, items_per_page):
    db = cnn.connect()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM Products")
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
    p = paginate.Page(result, page=page, items_per_page=items_per_page)
    print(p.page_count)
    return {'data': p.items, 'current_page': p.page,'number_of_page': p.page_count}


def add_product( Name,Link,ShortDescription,BannerImage,Title,Content):
    db = cnn.connect()
    sql = "INSERT INTO products (Name,Link,ShortDescription,BannerImage,Title,Content) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (Name,Link,ShortDescription,BannerImage,Title,Content)
    cursor = db.cursor()
    cursor.execute(sql, val)
    cursor.lastrowid
   
    cursor.execute("SELECT * FROM Products WHERE ProductId = " + str(cursor.lastrowid))
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
    
def update_product(ProductId, Name,Link,ShortDescription,BannerImage,Title,Content):
    db = cnn.connect()
    sql = "UPDATE Products SET Name = %s,Link = %s,ShortDescription= %s,BannerImage= %s,Title= %s,Content= %s WHERE ProductId = %s"
    val = (Name,Link,ShortDescription,BannerImage,Title,Content, ProductId)
    cursor = db.cursor()
    cursor.execute(sql, val)
    cursor.execute("SELECT * FROM Products WHERE ProductId = " + str(ProductId))
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

def delele_product(ProductId):
    db = cnn.connect()
    cursor = db.cursor()
    sql = "DELETE FROM Products WHERE ProductId = " + str(ProductId)
    cursor.execute(sql)
    cursor.close()
    db.commit()
    db.close()
    return "Deleted product with productId = "+ str(ProductId)