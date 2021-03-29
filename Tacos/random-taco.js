var tortillaOptions = ["cruncy stortilla", "soft tortilla", "dorito tortilla", "blue corn tortilla", "lettuce wrap"];
var proteinOptions = ["carne asada", "tinga chicken", "shrimp", "octopus", "tuna", "tilapia", "jerk chicken taco", "salt fish", "tofu", "eel", "salmon"];
var cheeseOptions = ["queso quesadilla", "cotilja cheese", "queso blanco", "stilton", "cheeto dust", "cheddar", "blue cheese", "gouda", "juusto", "ez cheese"];
var toppingsOptions = ["crema", "pico de galo", "guacamole", "salsa verde", "lettuce", "beans", "noodles", "jelly beans", "chocolate", "mustard", "popcorn", "ice cream", "flan", "nutella"];

function randomOption(options) {
    var randomIndex = Math.floor(options.length * Math.random());
    return options[randomIndex];
}

function getRandomizedTaco() {
    var taco = {};
    taco.tortilla = randomOption(tortillaOptions);
    taco.protein = randomOption(proteinOptions);
    taco.cheese = randomOption(cheeseOptions);
    var tempToppings = [];
    for(var i=0; i<3; i++) {
        tempToppings.push(randomOption(toppingsOptions));
    }
    taco.toppings = tempToppings;
    return taco;
}

console.log(getRandomizedTaco());

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