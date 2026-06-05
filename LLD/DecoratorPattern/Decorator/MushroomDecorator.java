package LLD.DecoratorPattern.Decorator;

import LLD.DecoratorPattern.BasePizza;

public class MushroomDecorator extends ToppingsDecorator{
    BasePizza basePizza;

    public MushroomDecorator(BasePizza pizza){
        this.basePizza = pizza;
    }

    public int cost(){
        return this.basePizza.cost() + 20;
    }
}
