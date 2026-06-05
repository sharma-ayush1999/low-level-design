package LLDQuesions.CarRentalSystem;

import LLDQuesions.CarRentalSystem.Product.Vehicle;

public class VehicleInventoryManagement {
    List<Vehicle> vehicles;
    
    VehicleInventoryManagement(List<Vehicle> vehicles){
        this.vehicles = vehicles;
    }

    public List<Vehicle> getVehicles(){
        //filtering
        return this.vehicles;
    }

    public void setVehicles(List<Vehicle> vehicles){
        this.vehicles = vehicles;
    }
}
