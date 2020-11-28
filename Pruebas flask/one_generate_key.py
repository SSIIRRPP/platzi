from cryptography.fernet import Fernet


def create():
        key = Fernet.generate_key()

        with open('mykey.key', 'wb') as mykey:

            mykey.write(key)


if __name__ == '__main__':
    create()