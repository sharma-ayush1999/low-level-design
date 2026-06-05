package LLDQuesions.CarRentalSystem;

import java.util.ArrayList;
import java.util.List;

import LLD.StrategyPattern.Vehicle;
import LLDQuesions.CarRentalSystem.Product.VehicleType;

public class Store {
    int storeId;
    VehicleInventoryManagement inventoryManagement;
    Location storeLocation;
    List<Reservation> reservations = new ArrayList<>();

    public List<Vehicle> getVehicles(VehicleType vehicleType){
        return inventoryManagement.getVehicles();
    }

    public void setVehicles(List<Vehicle> vehicles){
       inventoryManagement = new VehicleInventoryManagement(vehicles);
    }

    public Reservation createReservation(Vehicle vehicle, User user){
        Reservation reservation = new Reservation();
        reservation.createReservation(user, vehicle);
        reservations.add(reservation);
        return reservation;
    }

    public boolean completeReservation(int reservationId){
        //take out reservation from list and call complete reservation method;
        return true;
    }
}
