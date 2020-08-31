from account import Account

class Car():
    id = int
    license = ''
    driver = Account("", "")
    passengers = int

    def __init__(self, license, driver):
        self.license = license
        self.driver = driver

    def printDataCar(self):
        pass