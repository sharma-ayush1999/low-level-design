package LLD.DecoratorPattern.Decorator;

import LLD.DecoratorPattern.BasePizza;

public class ExtraCheeseDecorator extends ToppingsDecorator{
    BasePizza basePizza;

    public ExtraCheeseDecorator(BasePizza pizza){
        this.basePizza = pizza;
    }

    public int cost(){
        return this.basePizza.cost() + 10;
    }
}
