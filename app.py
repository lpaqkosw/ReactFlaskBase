from flask import Flask
from flask_cors import CORS
import json

## pip install flask
## pip install flask-cors

app = Flask(__name__)
cors = CORS(app, resources={
    r"/*": {"origin":  "*"},
    })


@app.route('/')
def hello_world():
    data = {
        "data": "dummy",
        "asdf": "fdsa",
        "hello": "world"
    }
    return data

@app.route('/ex')
def ex():
    data = {
        "example": "example"
    }
    return data