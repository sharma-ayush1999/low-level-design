package LLDQuesions.CarRentalSystem;

public class Bill {
    String billId;
    double amount;
    boolean isPaid;
    Reservation reservation;

    Bill(Reservation reservation){
        this.reservation = reservation;
        this.amount = computeBillAmount();
        isPaid = false;
    }

    private double computeBillAmount(){
        return 100.0;
    }
}
