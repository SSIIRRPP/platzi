


def protected(func):

    def wrapper(password):

        if password == 'platzi':
            return func()
        else:
            print('La contraseña es incorrecta bro.')

    return wrapper


@protected
def protected_func():
    print('Tu contraseña es correcta.')


if __name__ == '__main__':
    password = str(input('Escribe tu contraseña: '))

    protected_func(password)