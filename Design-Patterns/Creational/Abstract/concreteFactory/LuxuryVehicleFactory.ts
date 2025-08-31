import { Bike } from "../abstractProducts/Bike";
import { Car } from "../abstractProducts/Car";

import { LuxuryBike } from "../concreteProducts/bike/LuxuryBike";
import { LuxuryCar } from "../concreteProducts/car/LuxuryCar";
import { VehicleFactory } from "../VehicleFactory";


export class LuxuryVehicleFactory implements VehicleFactory {
    createCar(): Car {
        return new LuxuryCar()
    }
    createBike(): Bike {
        return new LuxuryBike();
    }
}