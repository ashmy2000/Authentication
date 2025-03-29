from pydantic import BaseModel, EmailStr, NameEmail

class UserSignup(BaseModel):
    username: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str

class ForgotRequest(BaseModel):
    email: str