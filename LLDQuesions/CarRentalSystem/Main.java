package LLDQuesions.CarRentalSystem;

import java.util.ArrayList;
import java.util.List;

import LLDQuesions.CarRentalSystem.Product.Car;
import LLDQuesions.CarRentalSystem.Product.Vehicle;
import LLDQuesions.CarRentalSystem.Product.VehicleType;

public class Main {
    public static void main(String args[]){
        List<User> users = addUsers();
        List<Vehicle> vehicles = addVehicles();
        List<Store> stores = addStores(vehicles);

        VehicleRentalSystem rentalSystem = new VehicleRentalSystem(stores, users);

        //0. user comes
        User user = users[0];

        //1. user search store based on location
        Location location = new Location("India", "DEL", "DEL", "203333");
        Store store = rentalSystem.getStore(location);

        //2. Get all vehicles based upon different filters
        List<Vehicle> storVehicles = store.getVehicles(VehicleType.CAR);

        //3. reserve the particular vehicle
        Reservation reservation = store.createReservation(storVehicles.get(0), users.get(0));

        //4. generate the bill
        Bill bill = new Bill(reservation);

        //5. make payment
        Payment payment = new Payment();
        payment.payBill(bill);

        //6. trip completed
        store.completeReservation(reservation.reservationId);



    }



}

public static List<Vehicle> addVehicles(){
    List<Vehicle> vehicles = new ArrayList<>();
    Vehicle vehicle1 = new Car();
    vehicle1.setVehicleId(0);
    vehicle1.setVehicleNumber(1234);

    Vehicle vehicle2 = new Car();
    vehicle2.setVehicleId(1);
    vehicle2.setVehicleNumber(99999);

    vehicles.add(vehicle1);
    vehicles.add(vehicle2);

    return vehicles;
}

public static List<User> addUsers(){
    List<User> users = new ArrayList<>();
    User user1 = new User();
    user1.setUserId(1);
    user1.setDrivingLicense(123);
    users.add(user1);
    return users;
}

public static List<Store> addStores(List<Vehicle> vehicles){
    List<Store> stores = new ArrayList<>();
    Store store1 = new Store();
    store1.storeId = 1;
    store1.setVehicles(vehicles);

    stores.add(store1);
    return stores;
}