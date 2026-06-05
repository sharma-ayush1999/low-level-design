package LLD.StrategyPattern;

import LLD.StrategyPattern.Strategy.DriveStrategy;

public class Vehicle{
    DriveStrategy driveObject;

    Vehicle(DriveStrategy driveObject){
        this.driveObject = driveObject;
    }

    public void drive(){
        this.driveObject.drive();
    }
}