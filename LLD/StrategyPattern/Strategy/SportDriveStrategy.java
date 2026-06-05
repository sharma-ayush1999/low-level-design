package LLD.StrategyPattern.Strategy;

public class SportDriveStrategy implements DriveStrategy {
    @Override
    public void drive(){
        System.out.println("Sports Drive Capability");
    }
}
