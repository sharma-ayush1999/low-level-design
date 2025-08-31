import { Bike } from "./abstractProducts/Bike";
import { Car } from "./abstractProducts/Car";

export interface VehicleFactory {
    createBike(): Bike;
    createCar(): Car;
}