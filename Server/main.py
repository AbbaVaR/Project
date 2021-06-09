from fastapi import FastAPI, HTTPException
import psycopg2
from psycopg2 import Error

app = FastAPI()


@app.get("/{id}")
def return_info(id: int):
    try:
        connection = psycopg2.connect(user="admin",
                                      password="000000",
                                      host="127.0.0.1",
                                      port="5432",
                                      database="map_info")
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM info WHERE id = %s ;", (id,))
        info = cursor.fetchone()
        request = {'id': info[0], 'x': info[1], 'y': info[2], 'info': info[3]}
        return request
    except (Exception, Error) as error:
        raise HTTPException(status_code=404, detail={info: error})
    finally:
        if connection:
            cursor.close()
            connection.close()
