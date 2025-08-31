import { Bike } from "../../abstractProducts/Bike";

export class EconomyBike implements Bike {
    ride(): void {
        console.log("Riding an economy bike")
    }
}