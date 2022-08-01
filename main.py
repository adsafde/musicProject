from asyncapi import get_asyncapp
from myapp import get_app
from fastapi import FastAPI
from starlette.staticfiles import StaticFiles

my_app: FastAPI = FastAPI()
my_app.mount("/static",
             StaticFiles(directory="static"),
             name="static")
app = get_app(my_app)
app = get_asyncapp(my_app)

if __name__ == '__main__':
    import uvicorn

    uvicorn.run(app='main:app',
                host="0.0.0.0",
                port=8000,
                reload=True,
                debug=True)