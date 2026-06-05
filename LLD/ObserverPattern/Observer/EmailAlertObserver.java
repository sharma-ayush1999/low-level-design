package LLD.ObserverPattern.Observer;

import LLD.ObserverPattern.Observable.StockObservable;

public class EmailAlertObserver implements NotificationAlertObserver {

    String emailId;
    StockObservable observable;

    public EmailAlertObserver(String emailId, StockObservable observable){
        this.observable = observable;
        this.emailId = emailId;
    }

    public void update(){
        sendEmail("product is in stock now.");
    }
    
    private void sendEmail(String message){
        System.out.println("Email Sent to:" + this.emailId);
        System.out.println("message" + message);
    }
}
