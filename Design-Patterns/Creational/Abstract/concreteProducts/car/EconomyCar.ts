import { Car } from "../../abstractProducts/Car";

export class EconomyCar implements Car {
    drive(): void {
        console.log('Driving an economy car')
    }
}