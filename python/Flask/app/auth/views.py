from flask import render_template, redirect, url_for, session, flash
from flask_login import login_user, login_required, logout_user
from werkzeug.security import generate_password_hash, check_password_hash

from app.forms import LoginForm
from app.firestore_service import get_user, user_put
from app.models import UserData, UserModel

from . import auth

@auth.route('/login', methods=['GET', 'POST'])
def login():
    login_form = LoginForm()
    context = {
        'login_form': login_form
    }

    if login_form.validate_on_submit():
        username = login_form.username.data
        password = login_form.password.data

        user_doc = get_user(username)

        if user_doc.to_dict() is not None:
            password_from_db = user_doc.to_dict()['password']

            if check_password_hash(password_from_db, password):
                user_data = UserData(username, password)
                user = UserModel(user_data)

                login_user(user)

                flash('¡Bienvenido de nuevo!')

                redirect(url_for('hello'))

            else:
                flash('La contraseña no es válida. Prueba de nuevo.')

        else:
            flash('¡El usuario no existe!')

        return redirect(url_for('index'))


    return render_template('login.html', **context)


@auth.route('sign_up', methods=['GET', 'POST'])
def sign_up():
    sign_up_form = LoginForm()
    context = {
        'sign_up_form': sign_up_form
    }

    if sign_up_form.validate_on_submit():
        username = sign_up_form.username.data
        password = sign_up_form.password.data

        user_doc = get_user(username)

        if user_doc.to_dict() is None:
            password_hash = generate_password_hash(password)
            user_data = UserData(username, password_hash)
            user_put(user_data)

            user = UserModel(user_data)

            login_user(user)

            flash('¡Usuario registrado correctamente!')

            return redirect(url_for('hello'))

        else:
            flash('¡Este nombre de usuario ya existe! Prueba otro')

    return render_template('sign_up.html', **context)


@auth.route('logout')
@login_required
def logout():
    logout_user()
    flash('¡Regresa pronto!')

    return redirect(url_for('auth.login'))
