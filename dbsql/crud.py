from sqlalchemy.orm import Session

from . import models


def get_user_by_email(db: Session):
    # time.sleep(5)
    return db.query(models.Playlist).filter(models.Playlist.id > 5119252832).all()


def get_user(db: Session):
    # time.sleep(5)
    return db.query(models.User).filter(models.User.id == 1).first()
