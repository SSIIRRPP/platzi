from flask import Flask, render_template, redirect, make_response, url_for, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('one_cookie.html')

@app.route("/setcookie", methods = ["POST", "GET"])
def setcookie():
    if request.method == "POST":
        user = request.form['nm']

        resp = make_response(render_template("one_readen_cookie.html"))
        resp.set_cookie('userID', user)

        return resp

@app.route('/getcookie')
def getcookie():
    name = request.cookies.get('userID')
    return '<h1>Welcome {}</h1>'.format(name.capitalize())