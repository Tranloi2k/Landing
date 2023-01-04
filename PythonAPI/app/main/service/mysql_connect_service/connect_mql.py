import mysql.connector
import config as con
from mysql.connector import errorcode


def connect():

    db = mysql.connector.connect(user=con.user, 
                                password=con.password,
                                host=con.host,
                                database=con.database)
    return db


 
            
   
    
    





    
