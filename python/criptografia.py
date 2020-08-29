KEYS = {
    'a': 'w',
    'b': 'E',
    'c': 'x',
    'd': '1',
    'e': 'a',
    'f': 't',
    'g': '0',
    'h': 'C',
    'i': 'b',
    'j': '!',
    'k': 'z',
    'l': '8',
    'm': 'M',
    'n': 'I',
    'o': 'd',
    'p': '.',
    'q': 'U',
    'r': 'Y',
    's': 'i',
    't': '3',
    'u': ',',
    'v': 'J',
    'w': 'N',
    'x': 'f',
    'y': 'm',
    'z': 'W',
    'A': 'G',
    'B': 'S',
    'C': 'j',
    'D': 'n',
    'E': 's',
    'F': 'Q',
    'G': 'o',
    'H': 'e',
    'I': 'u',
    'J': 'g',
    'K': '2',
    'L': '9',
    'M': 'A',
    'N': '5',
    'O': '4',
    'P': '?',
    'Q': 'c',
    'R': 'r',
    'S': 'O',
    'T': 'P',
    'U': 'h',
    'V': '6',
    'W': 'q',
    'X': 'H',
    'Y': 'R',
    'Z': 'l',
    '0': 'k',
    '1': '7',
    '2': 'X',
    '3': 'L',
    '4': 'p',
    '5': 'v',
    '6': 'T',
    '7': 'V',
    '8': 'y',
    '9': 'K',
    '.': 'Z',
    ',': 'D',
    '?': 'F',
    '!': 'B',
}


def cypher(message):
    words = message.split(' ')
    cyphered_message = []

    for word in words:
        cypher_word = ''
        for letter in word:
            cypher_word += KEYS[letter]

        cyphered_message.append(cypher_word)

    return ' '.join(cyphered_message)


def decypher(message):
    words = message.split(' ')
    decyphered_message = []

    for word in words:
        decypher_word = ''

        for letter in word:

            for key, value in KEYS.items():
                if value == letter:
                    decypher_word += key

        decyphered_message.append(decypher_word)

    return ' '.join(decyphered_message)


def run():
    
    while True:

        command = str(input("""

            B I E N V E N I D O  A L  C R I P T Ó G R A F O.

            ¿Qué desea hacer?

                [C]ifrar mensaje
                [D]escifrar mensaje
                [S]alir
        
        sirpsoft xd

        """))
        
        command = command.lower()

        if command == 'c':
            print('')
            print('Ha seleccionado Cifrar.')
            print('')
            message = str(input('Introduzca el mensaje a cifrar: '))
            cypher_message = cypher(message)
            print('Su mensaje ha sido cifrado: ' + cypher_message)
        elif command == 'd':
            print('')
            print('Ha seleccionado descifrar.')
            print('')
            message = str(input('Introduzca el mensaje a descifrar: '))
            decypher_message = decypher(message)
            print('Su mensaje ha sido descifrado: ' + decypher_message)
        elif command == 's':
            print('')
            print('Ha seleccionado salir. ¡Hasta pronto!')
            print('')
            break
        else:
            print('')
            print('Comando no válido :/ .')
            print('')


if __name__ == '__main__':
    run()