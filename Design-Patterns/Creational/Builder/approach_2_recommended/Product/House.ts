export class House {
    constructor(public walls: number, public doors: number, public garage: boolean, public swimmingPool: boolean) {

    }

    public describe() {
        console.log(`House with ${this.walls} walls, ${this.doors} doors, ${this.garage ? "a garage" : "no garage"}, and ${this.swimmingPool ? "a swimming pool" : "no swimming pool"}.`);
    }
}