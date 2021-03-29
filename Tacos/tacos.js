var taco1 = {
    tortilla: "blue corn hard shell",
    protein: "carne asada",
    cheese: "queso blanco",
    toppings: ["guacamole", "crema", "diced tomatoes", "radish"]
    tacoFacts: function() {
        console.log("Information about this taco:\n ");
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:   " + this.protein);
        console.log("Cheese:     " + this.cheese);
        console.log("Topping:  " );
        for(var i=0; i this.toppings.length; i++) {
            console.log("\t     - " + this.toppings[i]);
        }
        console.log("");
    }
}

var taco2 = {
    tortilla: "soft corn tortilla",
    protein: "lengua",
    cheese: "colby jack",
    toppings: ["fried onions", "bbq sauce", "lettuce"]
    tacoFacts: function() {
        console.log("Information about this taco:\n ");
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:   " + this.protein);
        console.log("Cheese:     " + this.cheese);
        console.log("Topping:  " );
        for(var i=0; i this.toppings.length; i++) {
            console.log("\t     - " + this.toppings[i]);
        }
        console.log("");
    } 
}

tacoFacts(taco1);
tacoFacts(taco2);