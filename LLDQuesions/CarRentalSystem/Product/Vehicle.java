package LLDQuesions.CarRentalSystem.Product;

public class Vehicle {
    int vehicleId;
    int vehicleNumber;
    VehicleType vehicleType;
    String companyName;
    String modelName;
    int kmDriven;
    Date manufacturingDate;
    int average;
    int cc;
    int dailyRentalCost;
    int hourlyRentalCost;
    int noOfSeat;
    Status vehicleStatus;

    public int getVehicleId(){
        return this.vehicleId;
    }

    public void setVehicleId(int VehicleId){
        this.vehicleId = vehicleId;
    }

    public int getVehicleNumber(){
        return this.vehicleNumber;
    }

    public void setVehicleNumber(int vehicleNumber){
        this.vehicleNumber = vehicleNumber;
    }

    public string getVehicleType(){
        return this.vehicleType;
    }

}
