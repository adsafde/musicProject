from fastapi import APIRouter, FastAPI
import myapp.view


def get_app(app: FastAPI):
    app_router = APIRouter()
    app_router.include_router(myapp.view.app, prefix="")
    # app = FastAPI()
    app.include_router(app_router)
    return app
