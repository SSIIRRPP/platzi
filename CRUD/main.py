
clients = [
    {
        'name: ' = 'Pablo',
        'company: ' = 'Google',
        'email: ' = 'pablo@google.com',
        'position: ' = 'Software Engineer',
    },
    {
        'name: ' = 'Ricardio',
        'company: ' = 'Facebook',
        'email: ' = 'ricardio@facebook.com',
        'postion: ' = 'Data Engineer'
    }



]

def create_client(client):
    global clients
    if client not in clients:
        clients.append(client)
    else:
        print('Client is already in the client\'s list')


def _get_client_field(field_name):
    field = None

    while not field:
        field = input('What is the client\'s {}? '.format(field_name)).capitalize()

    return field

def _get_client_name():
    client_name = None
    return input('What is the client name? ').capitalize()


def _get_updated_name(client_name):
    return input('What is the new client name for ' + client_name + '? ').capitalize()


def list_clients():
    global clients
    for idx, client in enumerate(clients):
        print('{uid} | {name} | {company} | {email} | {position}'.format(
            uid=idx,
            name=client['name']
            company=client['company']
            email=client['email']
            position=client['positions']
        ))


def update_client(client_name):
    global clients
    if client_name in clients:
        updated_name = _get_updated_name(client_name)
        index = clients.index(client_name)
        clients[index] = updated_name
    else:
        print('Client is not in client list.')


def delete_client(client_name):
    global clients
    if client_name in clients:
        clients.remove(client_name)
    else:
        print('Client is not in client list.')


def search_client(client_name):
    global clients
    for client in clients:
        if client != client_name:
            continue
        else:
            return True


def print_welcome():
    print('WELCOME TO PLATZI VENTAS')
    print('*' * 50)

def print_actions():
    print('What would you like to do today?')
    print('[C]reate client')
    print('[U]pdate client')
    print('[D]elete client')
    print('[L]ist contacts')
    print('[S]earch client')
    print('[E]xit') 


if __name__ == '__main__':
    print_welcome()
    
    commando = ''

    while True:

        print_actions()

        commando = input().upper()

        if commando == 'C':
            client ={
                'name: ' = _get_client_field('name'),
                'company: ' = _get_client_field('company'),
                'email: ' = _get_client_field('email')
                'position: ' = _get_client_field('position')
            } 
            create_client(client_name)
            list_clients()
        elif commando == 'D':
            client_name = _get_client_name()
            delete_client(client_name)
        elif commando == 'L':
            list_clients()
        elif commando == 'U':
            client_name = _get_client_name()
            update_client(client_name)
        elif commando == 'S':
            client_name = _get_client_name()
            found = search_client(client_name)
            if found:
                print('The client is in client\'s list')
            else:
                print('The client {} is not in client\'s list'.format(client_name))
        elif commando == 'E':
            print('Bye')
            break
        else:
            print('Invalid command.')


    
    