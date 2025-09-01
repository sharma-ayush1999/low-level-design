import { HouseBuilder } from "../Builder/HouseBuilder";
import { House } from "../Product/House";

export class ConcreteHouseBuilder implements HouseBuilder {
    #house: House;

    constructor() {
        this.#house = new House()
    }

    reset(): void {
        this.#house = new House();
    }

    buildWalls(count: number): void {
        this.#house.setWalls(count);
    }

    buildDoors(count: number): void {
        this.#house.setDoor(count);
    }

    addGarage(hasGarage: boolean): void {
        this.#house.setGarage(hasGarage);
    }

    addSwimmingPool(hasSwimmingPool: boolean): void {
        this.#house.setSwimmingPool(hasSwimmingPool);
    }

    build(): House {
        return this.#house;
    }

}