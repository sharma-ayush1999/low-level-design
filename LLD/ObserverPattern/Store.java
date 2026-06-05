package LLD.ObserverPattern;

import LLD.ObserverPattern.Observable.IphoneObservable;
import LLD.ObserverPattern.Observable.StockObservable;
import LLD.ObserverPattern.Observer.EmailAlertObserver;
import LLD.ObserverPattern.Observer.MobileAlertObserver;
import LLD.ObserverPattern.Observer.NotificationAlertObserver;

public class Store {
    public static void main(String args[]){
        StockObservable iphoneStockObservable = new IphoneObservable();

        NotificationAlertObserver observer1 = new EmailAlertObserver("test1@gmail.com", iphoneStockObservable);
        NotificationAlertObserver observer2 = new EmailAlertObserver("test13455@gmail.com", iphoneStockObservable);
        NotificationAlertObserver observer3 = new MobileAlertObserver("12234556", iphoneStockObservable);

        iphoneStockObservable.add(observer1);
        iphoneStockObservable.add(observer2);
        iphoneStockObservable.add(observer3);

        iphoneStockObservable.setStockCount(10);
    }
}
