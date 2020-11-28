from flask import Flask, render_template
app = Flask(__name__)

@app.route('/result/<nm>')
def result(nm):
    dict = {
        'phy':50,
        'che':60,
        'math':70
    }
    return render_template('result.html', result = dict, nm = nm)

if __name__ == '__main__':
    app.run(debug=True)