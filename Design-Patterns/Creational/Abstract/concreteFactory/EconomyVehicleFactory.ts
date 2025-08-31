import { Bike } from "../abstractProducts/Bike";
import { Car } from "../abstractProducts/Car";

import { EconomyBike } from "../concreteProducts/bike/EconomyBike";
import { EconomyCar } from "../concreteProducts/car/EconomyCar";
import { VehicleFactory } from "../VehicleFactory";

export class EconomyVehicleFactory implements VehicleFactory {
    createCar(): Car {
        return new EconomyCar()
    }
    createBike(): Bike {
        return new EconomyBike()
    }
}