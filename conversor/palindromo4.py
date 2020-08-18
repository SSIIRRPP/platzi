def palindrome(word):
    word = word.lower()
    word = word.replace(' ', '')
    word_inv = word[::-1]

    if word_inv == word:
        return True
    else:
        return False


def palindrome_prof(word):

    reversed_letters = []

    for letter in word:
        reversed_letters.insert(0, letter)

    reversed_word = ''.join(reversed_letters)

    if reversed_word == word:
        return True

    return False


def check_phrase(word):
    
    for letter in word:
        if letter == ' ':
            return True
            break
        else:
            continue
    return False



def method_comp():

    meth_val = False

    while not meth_val:

        method = int(input('Selecciona un método [1 (frases) o 2 (sólo palabras)]: '))
        print('')

        if method == 1:
            word = introducir_palabra()
            palindromo = palindrome(word)
            meth_val = True
            return palindromo
        elif method == 2:
            word = introducir_palabra()
            es_frase = False
            es_frase = check_phrase(word)
            if es_frase == False:
                palindromo = palindrome_prof(word)
                meth_val = True
                return palindromo
            else:
                print('Este método solo acepta palabras.')
                print('')
        else:
            print('Escribe un método válido, pelotudo. -.-')
            print('')
            meth_val = False


def introducir_palabra():

    word = input('Escribe una palabra: ')
    print('')

    return word


def salida():

    valid_exit = False
    
    while not valid_exit:
        exxxit = int(input('¿Quiere salir ya? (1 - Salir, 2 - Continuar): '))
        print('')
        if exxxit == 1:
            return True
            valid_exit = True
        elif exxxit == 2:
            return False
            valid_exit = True
        else:
            print('Introduzca una opción válida')
            print('')





if __name__ == '__main__':

    print("""
        B I E N V E N I D O   A L   C O M P R O B A D O R 

                    D E   P A L Í N D R O M O S.

        
        
        sirpsoft xd.
    """)

    salir = False

    while not salir:

        es_palindromo = method_comp()
        
        if not es_palindromo:
            print('No es palíndromo.')
            print('')
        else:
            print('Es palíndromo.')
            print('')

        salir = salida()

    print('¡Hasta pronto!')
    print('')