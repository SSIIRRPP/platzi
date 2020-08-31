def run():
    counter = 0
    with open ('aleph.txt', 'r') as f:
        for line in f:
            counter += line.count(' y ')

    print('" y " se encuentra {} veces en el texto.'.format(counter))


if __name__ == '__main__':
    run()