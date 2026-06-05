package LLD.StrategyPattern;

import LLD.StrategyPattern.Strategy.NormalDriveStrategy;

public class main {
    public static void main(String args[]) {
        Vehicle vehicle1 = new GoodsVehicle();
        Vehicle vehicle2 = new SportsVehicle();
        vehicle1.drive();
        vehicle2.drive();
    }
}
