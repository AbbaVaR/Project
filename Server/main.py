from fastapi import FastAPI
import psycopg2
from psycopg2 import Error

app = FastAPI()


@app.get("/{id}")
def return_info(id: int):
    return database_get_info(id)


def database_get_info(id_db):
    try:
        connection = psycopg2.connect(user="postgres",
                                      password="1111",
                                      host="127.0.0.1",
                                      port="5432",
                                      database="postgres_db")
        cursor = connection.cursor()
        return cursor.execute("SELECT * FROM mobile WHERE id = %s ;", id_db)
    except (Exception, Error) as error:
        return error
    finally:
        if connection:
            cursor.close()
            connection.close()
