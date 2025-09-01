import { Dir } from "fs";
import { ConcreteHouseBuilder } from "./ConcreteBuilder/ConcreteHouseBuilder";
import { Director } from "./Director";

const builder = new ConcreteHouseBuilder();
const director = new Director(builder);


const luxuryHouse = director.constructorLuxuryHouse();
const simpleHouse = director.constructorSimpleHouse();

luxuryHouse.describe();
simpleHouse.describe();
