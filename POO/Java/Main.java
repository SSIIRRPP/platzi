package Java;

class Main{
    public static void main(final String[] args) {
        System.out.println("Hola mundo");
        Car car = new Car("AMQ123", new Account("Andrés Herrera", "AND123"));
        car.passenger = 4;
        car.printDataCar();

        Car car2 = new Car("QWE567", new Account("Andrea Herrera", "ANA1233"));
        car2.passenger = 3;
        car2.printDataCar();

    }
}