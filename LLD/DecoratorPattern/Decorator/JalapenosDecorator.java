package LLD.DecoratorPattern.Decorator;

import LLD.DecoratorPattern.BasePizza;

public class JalapenosDecorator extends ToppingsDecorator{
    BasePizza pizza;

    public JalapenosDecorator(BasePizza pizza){
        this.pizza = pizza;
    }

    public int cost(){
        return this.pizza.cost() + 30;
    }
}
