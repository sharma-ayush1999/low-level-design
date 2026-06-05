package LLD.ObserverPattern.Observer;

import LLD.ObserverPattern.Observable.StockObservable;

public class MobileAlertObserver implements NotificationAlertObserver{

    String mobileNumber;
    StockObservable observer;

    public MobileAlertObserver(String mobileNumber, StockObservable observer){
        this.mobileNumber = mobileNumber;
        this.observer = observer;
    }

    public void update(){
        sendMessage("Product in stock now.");
    }
    
    public void sendMessage(String message){
        System.out.println("message sent to number:" + this.mobileNumber);
        System.out.println("message" + message);
    }
}
