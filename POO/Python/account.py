class Account():
    id = int
    Name = ''
    Document = ''
    email = ''
    password = ''

    def __init__(self, name, document):
        self.name = name
        self.document = document