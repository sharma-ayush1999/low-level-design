package LLDQuesions.CarRentalSystem;

public class User {
    int userId;
    int drivingLicense;
    String userName;
    String phoneNumber;
    String email;

    public int getUserId(){
        return this.userId;
    }

    public void setUserId(int userId){
        this.userId = userId;
    }

    public String getUserName(){
        return this.userName;
    }

    public void set(String userName){
        this.userName = userName;
    }

    public int getDrivingLicense(){
        return this.drivingLicense;
    }

    public void setDrivingLicense(int drivingLicense){
        this.drivingLicense = drivingLicense;
    }
}
