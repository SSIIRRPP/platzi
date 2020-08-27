
clients = [
    {
        'name' :'Pablo',
        'company' : 'Google',
        'email' : 'pablo@google.com',
        'position' : 'Software Engineer',
    }, 
    {
        'name' : 'Ricardio',
        'company' :  'Facebook',
        'email' : 'ricardio@facebook.com',
        'position' : 'Data Engineer'
    }

]


def _get_client():
    client ={
                'name' : _get_client_field('name'),
                'company' : _get_client_field('company'),
                'email' : _get_client_field('email'),
                'position' : _get_client_field('position')
            } 

    return client


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


def _get_updating_name():
    return input('What is the name of the client to update? ').capitalize()


def _get_deleting_client():
    return input('What is the name of the client to delete? ').capitalize()


def _get_searched_client():
    return input('What is the name of the client to search? ').capitalize()


def list_clients():
    global clients
    for idx, client in enumerate(clients):
        print('{uid} | {name} | {company} | {email} | {position}'.format(
            uid=idx,
            name=client['name'],
            company=client['company'],
            email=client['email'],
            position=client['position'],
        ))


def update_client(client_update):
    global clients
    client_check_id = _check_client(client_update, clients)
    if client_check_id is False:
        print('Client is not in clients list.')
    else:
        print('Updating process:')
        client = _get_client()
        clients[client_check_id].clear()
        clients[client_check_id] = client
        print('Client Updated')



def _check_client(name, given_dict_list):

    for idx, i in enumerate(given_dict_list):
        if name == i.get('name'):
            return idx
            break
    return False    


def delete_client(client_deleted):
    global clients
    client_check_id = _check_client(client_deleted, clients)
    if client_check_id is False:
        print('Client is not in clients list.')
    else:
        print('Deleting process:')
        del clients[client_check_id]
        print('Client deleted.')


def search_client(client_name):
    global clients
    print('Searching client...')
    for i, a in enumerate(clients):
        if client_name != a
        .get('name'):
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
            client = _get_client()
            create_client(client)
            list_clients()
        elif commando == 'D':
            client_deleted = _get_deleting_client()
            delete_client(client_deleted)
        elif commando == 'L':
            list_clients()
        elif commando == 'U':
            client_update = _get_updating_name()
            update_client(client_update)
        elif commando == 'S':
            client_name = _get_searched_client()
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


    
    