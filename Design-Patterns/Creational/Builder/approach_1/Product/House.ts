export class House {
    #walls: number = 0;
    #doors: number = 0;
    #garage: boolean = false;
    #swimmingPool: boolean = false;

    public setWalls(count: number) {
        this.#walls = count;
    }

    public setDoor(count: number) {
        this.#doors = count;
    }

    public setGarage(hasGarage: boolean) {
        this.#garage = hasGarage;
    }

    public setSwimmingPool(hasSwimmingPool: boolean) {
        this.#swimmingPool = hasSwimmingPool;
    }

    public describe() {
        console.log(`House with ${this.#walls} walls, ${this.#doors} doors, ${this.#garage ? "a garage" : "no garage"}, and ${this.#swimmingPool ? "a swimming pool" : "no swimming pool"}.`);
    }
}