countries = {
    'mexico': 122,
    'colombia': 49,
    'argentina': 43,
    'chile': 18,
    'peru': 31
}

while True:
    country = str(input('Escribe el nombre del país: ')).lower()
    try:
        print('La poblacion de {} es: {} millones'.format(country, countries[country]))
    except KeyError:
        print('No se encontró el país.')