package LLDQuesions.CarRentalSystem;

import java.util.ArrayList;

public class VehicleRentalSystem {
    List<User> users;
    List<Store> stores;

    VehicleRentalSystem(List<Store> stores, List<User> users){
        this.stores = stores;
        this.users = users;
    }

    public Store getStore(Location location){
        return stores.get(0)
    }
    //CRUD ops on users and stores
}
