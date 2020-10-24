from flask import Flask, redirect, render_template, request, flash, url_for
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key='random string'
mail = Mail(app)


app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

@app.route('/')
def index():
    return render_template("flash_login.html")

@app.route('/login', methods = ['GET', 'POST'])
def login():
    error = None

    if request.method == 'POST':
        if request.form['username'] != 'encuencu22@gmail.com' or \
        request.form['password'] != 'Anymamtiocom0' :
            error = 'Invalid username or password. Please, try again.'
        else:

            app.config['MAIL_USERNAME'] = request.form.get('username')
            app.config['MAIL_PASSWORD'] = request.form.get('password')
            flash('You were successfully logged in! ')
            return render_template('send_email.html')

    return render_template('flash_login.html', error = error)

@app.route('/emailsender', methods = ['GET', 'POST'])
def email_sender():
    if request.method == 'POST':
        msg = Message(request.form['subject'], 
        sender = 'encuencu22@gmail.com', 
        recipients = ['jorge.sirp@gmail.com'])
        msg.body = request.form.get('message')
        mail.send(msg)
        return "Email Sent successfully"
    return "something failed :/"


def set_config(request):
    pass


if __name__ == '__main__':
    app.run(debug = True)