import { Car } from "../../abstractProducts/Car";

export class LuxuryCar implements Car {
    drive(): void {
        console.log('Driving a luxury car')
    }
}