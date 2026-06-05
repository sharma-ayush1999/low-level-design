package LLDQuesions.CarRentalSystem;

import LLDQuesions.CarRentalSystem.Product.Vehicle;

public class Reservation {
    String reservationId;
    User user;
    Vehicle vehicle;
    Date bookingDate;
    Date bookedFrom;
    Date bookedTo;
    long fromTimeStamp;
    Long toTimeStamp;
    Location pickupLocation;
    Location dropLocation;
    ReservationType reservationType;
    ReservationStatus reservationStatus;
    Location location;

    public int createReservation(User user, Vehicle vehicle){
        //generate reservation id
        reservationId = 12345;
        this.user = user;
        this.vehicle = vehicle;
        reservationType = reservationType.DAILY;
        reservationStatus = reservationStatus.SCHEDULED;
        
        return reservationId;
    }
}
