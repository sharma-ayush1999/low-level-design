import { Bike } from "../../abstractProducts/Bike";

export class LuxuryBike implements Bike {
    ride(): void {
        console.log("Riding a luxury bike")
    }
}