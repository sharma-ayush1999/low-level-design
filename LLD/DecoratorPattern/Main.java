package LLD.DecoratorPattern;

import LLD.DecoratorPattern.Decorator.ExtraCheeseDecorator;
import LLD.DecoratorPattern.Decorator.JalapenosDecorator;
import LLD.DecoratorPattern.Decorator.MushroomDecorator;
import LLD.DecoratorPattern.Decorator.ToppingsDecorator;

public class Main {
    public static void main(String args[]){
        // MargheritaPizza mPizza = new MargheritaPizza();
        // FarmhousePizza fPizza = new FarmhousePizza();

        ToppingsDecorator pizza = new JalapenosDecorator(new ExtraCheeseDecorator(new MushroomDecorator(new MargheritaPizza())));
        
        // System.out.println("Margherita Pizza cost is: " + mPizza.cost());
        // System.out.println("Farmhouse Pizza cost is: " + fPizza.cost());
        System.out.println("Pizza cost is: " + pizza.cost());
    }
}
