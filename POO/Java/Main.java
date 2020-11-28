package Java;

class Main{
    public static void main(String[] args) {
        System.out.println("Hola mundo");
        UberX uberX = new UberX("AMQ123", new Account("Andrés Herrera", "AND123"), "Chevrolet", "Sonic");
        uberX.setPassenger(4);
        uberX.printDataCar();

        /* Car car2 = new Car("QWE567", new Account("Andrea Herrera", "ANA1233"));
        car2.passenger = 3;
        car2.printDataCar(); */

        UberVan uberVan = new UberVan("FGH345", new Account("Andrés Herrera", "AND123"));
        uberVan.setPassenger(6);
        uberVan.printDataCar();
    }
}