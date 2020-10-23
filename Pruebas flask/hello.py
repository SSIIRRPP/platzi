from flask import Flask, render_template
app = Flask(__name__)

@app.route('/hello/<name>/<int:score>')
def hello_name(name, score):
    return render_template('hello.html', marks = score, name = name)

if __name__ == '__main__':
    app.run(debug = True)