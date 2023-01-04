import service.mysql_connect_service.connect_mql as cnn
from service.auth_service.auth_service import generate_password_hash


def get_all_users():
    db = cnn.connect()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM Users")
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

def get_user_by_id(id):
    db = cnn.connect()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM Users WHERE UserId = " + str(id))
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

def get_user_by_name(name):
    db = cnn.connect()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM Users WHERE UserName = '" + str(name) +"'")
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

def add_user(user_name, password):
    db = cnn.connect()
    hash_password = generate_password_hash(password)
    sql = "INSERT INTO Users (UserName, HashPassword) VALUES (%s, %s)"
    val = (user_name, hash_password)
    cursor = db.cursor()
    cursor.execute(sql, val)
    cursor.lastrowid
   
    cursor.execute("SELECT * FROM Users WHERE UserId = " + str(cursor.lastrowid))
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


#TODO: ADD upadte user, delete user
def update_product(UserId, password):
    db = cnn.connect()
    hash_password = generate_password_hash(password)
    sql = "UPDATE Users SET HashPassword = %s WHERE UserId = %s"
    val = (hash_password)
    cursor = db.cursor()
    cursor.execute(sql, val)
    cursor.execute("SELECT * FROM Users WHERE UserId = " + str(UserId))
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

def delele_user(UserId):
    db = cnn.connect()
    cursor = db.cursor()
    sql = "DELETE FROM Users WHERE UserId = " + str(UserId)
    cursor.execute(sql)
    cursor.close()
    db.commit()
    db.close()
    return "Deleted product with productId = "+ str(UserId)