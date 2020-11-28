from car import Car

class UberPool(Car):
    brand = ''
    model = ''

    def __init__(self, license, driver, brand, model):
        super.__init__(license, driver)
        self.brand = brand
        self.model = model