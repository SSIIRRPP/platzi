from car import Car

if __name__ == '__main__':
    print('Hola mundo')

    car = Car()
    car.license = "AMS234"
    car.driver = "Andrés Herrera"
    print(vars(car))

    car2 = Car()
    car2.license = "AMS234"
    car2.driver = "Andrés Herrera"
    print(vars(car2))