import random

def run():
    number_found = False
    max_range = int(input('Introduce un número máximo a adivinar: '))
    random_number = random.randint(0, max_range)

    while not number_found:
        number = int(input('Introduce un número a adivinar: '))

        if number == random_number:
            print('¡Felicidades! Encontraste el número')
            number_found = True
        elif number > random_number:
            print('El número es más pequeño wey')
        else:
            print('El número es más grande wey')


if __name__ == '__main__':
    run()