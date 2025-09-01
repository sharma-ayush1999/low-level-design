import { House } from "../Product/House";

export interface HouseBuilder {
    reset(): void
    buildWalls(count: number): void;
    buildDoors(count: number): void;
    addGarage(hasGarage: boolean): void;
    addSwimmingPool(hasSwimmingPool: boolean): void;
    build(): House;
}