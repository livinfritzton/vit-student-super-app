from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "VIT Student Super App Backend is running!"}