from flask import Flask
from flask_cors import CORS
import json

## pip install flask
## pip install flask-cors

app = Flask(__name__)
cors = CORS(app, resources={
    r"/*": {"origin":  "*"},
    })


## react에서 localhost:5000에 요청을 보내면 data를 return한다.
@app.route('/')
def hello_world():
    data = {
        "data": "dummy",
        "asdf": "fdsa",
        "hello": "world"
    }
    return data

## react에서 localhost:5000/ex에 요청을 보내면 data를 return한다.
@app.route('/ex')
def ex():
    data = {
        "example": "example"
    }
    return data