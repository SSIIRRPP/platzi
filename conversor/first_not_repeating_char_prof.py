def frst_not_rpt_char(char_sequence):
    seen_letter = {}

    for idx, letter in enumerate(char_sequence):
        if letter not in seen_letter:
            seen_letters[letter] = (idx, 1)
        else:
            seen_letters[letters] = (seen_letters[letter][0], seen_letters[letter][1] + 1)

    final_letters = []
    for key, value in seen_letters.items():
        if value[1] == 1:
            final_letters.append((key, value[0]))

    not_repeated_letters = sorted(final_letters, key=lambda value: value[1])

    if not_repeated_letters:
        return not_repeated_letters[0][0]
    else:
        return '_'


if __name__ == '__main__':
    char_sequence = input('Introduce una secuencia de caracteres: ')

    result = frst_not_rpt_char(char_sequence)

    if result == '_':
        print('Todos los caracteres se repiten.')
    else:
        print('El primer caracter que no se repite es: {}'.format(result))