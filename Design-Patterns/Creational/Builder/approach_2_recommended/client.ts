import { HouseBuilder } from "./FluentBuilder/HouseBuilder";

const luxuryHouse = new HouseBuilder().setWalls(5).setDoors(2).addGarage().addSwimmingPool().build();
const simpleHouse = new HouseBuilder().setWalls(3).setDoors(1).build();

luxuryHouse.describe();
simpleHouse.describe();