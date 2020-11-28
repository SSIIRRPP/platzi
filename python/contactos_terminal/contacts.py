import csv


class New_contact:

    def __init__(self, name, phone, email):
        self.name = name
        self.phone = phone
        self.email = email

class ContactBook:

    def __init__(self):
        self._contacts = []


    def add(self, name, phone, email):
        name = name.capitalize()
        contact = New_contact(name, phone, email)
        self._contacts.append(contact)
        self._save()


    def show_all(self):
        for contact in self._contacts:
            self._print_contact(contact)
            print('')

    
    def _print_contact(self, contact):

        print('--- * --- * --- * --- * --- * --- * --- * ---')
        print('Nombre: {}'.format(contact.name))
        print('Teléfono: {}'.format(contact.phone))
        print('Email: {}'.format(contact.email))
        print('--- * --- * --- * --- * --- * --- * --- * ---')

    
    def delete(self, name):
        for idx, contact in enumerate(self._contacts):
            if contact.name.lower() == name.lower():
                while True:
                    print('')
                    confirm = str(input('Está seguro de eliminar el contacto?[S/N]: ').upper())
                    print('')
                    if confirm == 'S':
                        del self._contacts[idx]
                        self._save()
                        print('')
                        print('El contacto ha sido eliminado.')
                        print('')
                        break
                    elif confirm == 'N':
                        print('')
                        print('Ha cancelado la eliminación del contacto seleccionado')
                        print('')
                        break
                    else:
                        print('')
                        print('Comándo no válido. Introduzca \'s\' para confirmar, o \'n\' para cancelar.')
                        print('')
                        continue


    def auto_delete(self, name):
        for idx, contact in enumerate(self._contacts):
            if contact.name.lower() == name.lower():
                del self._contacts[idx]
                break


    def search(self, name):
        for contact in self._contacts:
            if contact.name.lower() == name.lower():
                self._print_contact(contact)
                break
        else:
            self._not_found_edit()


    def _save(self):
        with open ('contacts.csv', 'w') as f:
            writer = csv.writer(f)
            writer.writerow(('name', 'phone', 'email'))

            for contact in self._contacts:
                writer.writerow((contact.name, contact.phone, contact.email))


    def _not_found(self):
        print('')
        print('No se encontró el contacto')
        print('')


    def _not_found_edit(self):
        print('')
        print('No se encontró el contacto a editar')
        print('')


    def edit_contact(self, name):
        for contact in self._contacts:
            if contact.name.lower() == name.lower():
                self._current_name = name
                _new_phone = str(input('Escribe el nuevo número de teléfono del contacto \'{}\': '.format(self._current_name)))
                _new_email = str(input('Escribe el nuevo email del contacto \'{}\': '.format(self._current_name)))
                self.auto_delete(name)
                self.add(name, _new_phone, _new_email)
                self._save()
        else:
            self._not_found()


def run():

    contact_book = ContactBook()

    with open('contacts.csv', 'r') as f:
        reader = csv.reader(f)
        for idx, row in enumerate(reader):
            if idx == 0:
                continue

            contact_book.add(row[0], row[1], row[2])

    while True:
        command = str(input("""
            Bienvenido a la Agenda

            ¿Qué deseas hacer?

            [A]ñadir contacto
            [Ac]tualizar contacto
            [B]uscar contacto
            [E]liminar contacto
            [L]istar contactos
            [S]alir

        """).upper())

        if command == 'A':
            print('')
            print('Ha seleccionado \'Añadir contacto\'')
            print('')
            name = str(input('Escribe el nombre del contacto: '))
            phone = str(input('Escribe el teléfono del contacto: '))
            email = str(input('Escribe el email del contacto: '))

            contact_book.add(name, phone, email)

        elif command == 'AC':
            print('')
            print('Ha seleccionado \'Actualizar contacto\'')
            print('')

            name = str(input('Escribe el nombre del contacto a editar: ').lower())
            contact_book.edit_contact(name)

        elif command == 'B':
            print('')
            print('Ha seleccionado \'Buscar contacto\'')
            print('')

            name = str(input('Escribe el contacto que quieres buscar: '))
            contact_book.search(name)

        elif command == 'E':
            print('')
            print('Ha seleccionado \'Eliminar contacto\'')
            print('')

            name = str(input('Escribe el nombre del contacto a eliminar: '))

            contact_book.delete(name)

        elif command == 'L':
            print('')
            print('Ha seleccionado \'Listar contactos\'')
            print('')

            contact_book.show_all()

        elif command == 'S':
            print('')
            print('¡Hasta pronto!')
            print('')
            break
        else:
            print('')
            print('Esa opción no es válida')
            print('')






if __name__ == '__main__':
    run()