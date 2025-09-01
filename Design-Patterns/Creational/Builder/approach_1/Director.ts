import { HouseBuilder } from "./Builder/HouseBuilder";
import { House } from "./Product/House";

export class Director {
    constructor(private builder: HouseBuilder) { }

    public constructorLuxuryHouse(): House {
        this.builder.reset();
        this.builder.buildWalls(5);
        this.builder.buildDoors(2);
        this.builder.addGarage(true);
        this.builder.addSwimmingPool(true);
        return this.builder.build();
    }

    public constructorSimpleHouse(): House {
        this.builder.reset();
        this.builder.buildWalls(3);
        this.builder.buildDoors(1);
        return this.builder.build();
    }

}