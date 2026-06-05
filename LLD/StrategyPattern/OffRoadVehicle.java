package LLD.StrategyPattern;

import LLD.StrategyPattern.Strategy.SportDriveStrategy;

public class OffRoadVehicle extends Vehicle {
    OffRoadVehicle(){
        super(new SportDriveStrategy());
    }
}
