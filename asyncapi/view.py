from fastapi import Depends, APIRouter
from starlette.responses import FileResponse
from .utils import mydf
import asyncio
import time

app = APIRouter()


# @app.get("/user", response_model=schemas.MyUser)
# def get_age(db: Session = Depends(get_db)):
#     print('db conn')
#     users = crud.get_user(db)
#     users = {
#         "id": users.id,
#         "age": users.age
#     }
#     return users


def get_age_add():
    yield 100


@app.get('/file')
async def get_file():
    return FileResponse('static/img/about.jpg',
                        filename='file.jpg')


@app.get('/test')
async def test(age=Depends(get_age_add)):
    return {"test": age}


@app.get('/time')
async def get_time():
    return {"time": time.time()}


@app.get('/data/{id}')
async def get_data(id: int):
    await asyncio.sleep(0.5)
    data_list = [
        {
            'name': f'my name is dynamic {id}',
            'age': 'I am 28 years old',
            'city': 'I live in London',
            'phone': 'I have a phone number'
        },
        {
            'name': f'my name is dynamic {id}',
            'age': 'I am 28 years old',
            'city': 'I live in London',
            'phone': 'I have a phone number'
        },
        {
            'name': f'my name is dynamic {id}',
            'age': 'I am 28 years old',
            'city': 'I live in London',
            'phone': 'I have a phone number'
        }
    ]
    return data_list[id]


@app.get('/auth/{ids}')
def auth(ids: int):
    try:
        return {'code': 200, 'datas': mydf.page_data(ids), 'page_len': mydf.page}
    except Exception as e:
        return {'code': 500, 'error': str(e)}
