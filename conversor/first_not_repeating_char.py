
def frst_not_rpt_char(char_sequence):
    
    characters = char_sequence.replace(' ', '')
    characters = characters.lower()
    rep_character = ''

    for letter in characters:
        do_char_rep = characters.count(letter)
        if do_char_rep == 1:
            rep_character = letter
            break
        else:
            continue
    
    return rep_character.upper()

        
if __name__ == '__main__':

    char_sequence = str(input('Introduce una secuencia de caracteres: '))

    char = frst_not_rpt_char(char_sequence)

    if char == '':
        print('Todos los caracteres se repiten.')
    else:
        print('El primer caracter que no se repite es ' + char)