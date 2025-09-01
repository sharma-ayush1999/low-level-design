import { House } from "../Product/House";

export class HouseBuilder {
    #walls: number = 0;
    #doors: number = 0;
    #swimmingPool: boolean = false;
    #garage: boolean = false;

    public setWalls(count: number): this {
        this.#walls = count;
        return this
    }

    public setDoors(count: number): this {
        this.#doors = count;
        return this
    }

    public addSwimmingPool(): this {
        this.#swimmingPool = true;
        return this
    }

    public addGarage(): this {
        this.#garage = true;
        return this
    }

    public build(): House {
        return new House(this.#walls, this.#doors, this.#garage, this.#swimmingPool);
    }
}