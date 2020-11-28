def run():
    contador = 0
    while contador <= 10:
        print('vuelta nº' + str(contador))
        contador += 1
        if contador == 8:
            print('stop vuelta nº 8')
            break
        # else:
        #     continue



if __name__ == '__main__':
    contador = 0
    run()