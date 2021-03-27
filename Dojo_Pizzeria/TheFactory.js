var pizza = {
    crustType: "cripsy",
    sauceType: "marinara",
    cheeses: "cheddar",
    toppings: "sausage",
    PizzaOven: function() {
        console.log("The crust type is: " + this.crustType);
        console.log("The sauce type is: " +  this.sauceType);
        console.log("The cheese is: " + this.cheeses);
        console.log("The toppings is: " + this.toppings);
    }
}
pizza.PizzaOven();

var pizza1 = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses: "mozzarella",
    toppings: ["pepperoni", " sausage"],
    PizzaOven: function() {
        console.log("The crust type is: " + this.crustType);
        console.log("The sauce type is: " +  this.sauceType);
        console.log("The cheese is: " + this.cheeses);
        console.log("The toppings is: " + this.toppings);
    }
}
pizza1.PizzaOven();

var pizza2 = {
    crustType: "hand tossed",
    sauceType: "marinara",
    cheeses: ["mozzarella", " feta"],
    toppings: ["mushrooms", " olives", " onions"],
    PizzaOven: function() {
        console.log("The crust type is: " + this.crustType);
        console.log("The sauce type is: " +  this.sauceType);
        console.log("The cheese is: " + this.cheeses);
        console.log("The toppings is: " + this.toppings);
    }
}
pizza2.PizzaOven();

var pizza3 = {
    crustType: "thin",
    sauceType: "gravy",
    cheeses: "pepperjack",
    toppings: ["jalapenos", " grilled chicken"],
    PizzaOven: function() {
        console.log("The crust type is: " + this.crustType);
        console.log("The sauce type is: " +  this.sauceType);
        console.log("The cheese is: " + this.cheeses);
        console.log("The toppings is: " + this.toppings);
    }
}
pizza3.PizzaOven();

var pizza4 = {
    crustType: "New York thin",
    sauceType: "no sauce",
    cheeses: "american",
    toppings: ["ham", " canadian bacon"],
    PizzaOven: function() {
        console.log("The crust type is: " + this.crustType);
        console.log("The sauce type is: " +  this.sauceType);
        console.log("The cheese is: " + this.cheeses);
        console.log("The toppings is: " + this.toppings);
    }
}
pizza4.PizzaOven();

randomPizza Math.random();
