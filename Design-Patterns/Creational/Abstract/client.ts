import { EconomyVehicleFactory } from "./concreteFactory/EconomyVehicleFactory";
import { LuxuryVehicleFactory } from "./concreteFactory/LuxuryVehicleFactory";
import { VehicleFactory } from "./VehicleFactory";

function main(factory: VehicleFactory) {
    const car = factory.createCar();
    const bike = factory.createBike();

    car.drive();
    bike.ride();
}

main(new LuxuryVehicleFactory());
main(new EconomyVehicleFactory());