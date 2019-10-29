from flask import Flask, jsonify, request, make_response
# from sklearn.externals import joblib
from flask_restplus import fields, Resource, Api

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

