package LLD.ObserverPattern.Observable;

import java.util.ArrayList;
import java.util.List;

import LLD.ObserverPattern.Observer.NotificationAlertObserver;

public class IphoneObservable implements StockObservable{
    public List<NotificationAlertObserver> observersList = new ArrayList<>();
    public int stockCount = 0;
    
    @Override
    public void add(NotificationAlertObserver observer){
        observersList.add(observer);
    }

    @Override
    public void remove(NotificationAlertObserver observer){
        observersList.remove(observer);
    }

    @Override
    public void notifySubscribers(){
        for(NotificationAlertObserver observer : observersList){
            observer.update();
        }
    }

    @Override
    public void setStockCount(int newStockAdded){
        if(stockCount == 0){
            notifySubscribers();
        }
        stockCount = stockCount + newStockAdded;
    }

    @Override
    public int getStockCount(){
        return stockCount;
    }
}
