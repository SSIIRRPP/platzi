from lamp import Lamp

def run():
    lamp = Lamp(is_turned_on=False)

    while True:
        command = str(input('''
            ¿Qué deseas hacer?

            [P]render
            [A]pagar
            [S]alir

        ''')).lower()

        if command == 'p':
            lamp.turn_on()
        elif command == 'a':
            lamp.turn_off()
        elif command == 's':
            break
        else:
            print('Comando no encontrado.')


if __name__ == '__main__':
    run()