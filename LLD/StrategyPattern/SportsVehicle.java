package LLD.StrategyPattern;

import LLD.StrategyPattern.Strategy.SportDriveStrategy;

public class SportsVehicle extends Vehicle {
    SportsVehicle(){
        super(new SportDriveStrategy());
    }
}
