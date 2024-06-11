/*
What is Inheritance?
Inheritance allows one object to inherit properties and methods from another object. This helps in reusing code and creating a more organized and modular structure.

How Does Inheritance Work with Prototypes?
In JavaScript, inheritance is implemented through prototypes. When you create a new object, you can set its prototype to another object, allowing it to inherit properties and methods from that object.
*/

//Defining a constructor function
function Animal(name) {
    this.name = name;
    this.eats = true;
}

// This defines a walk method on Animal.prototype. All Animal instances with share this method.
Animal.prototype.walk = function() {
    console.log(this.name + " walks");
};

// Creating a Subclass for creating Rabbit objects.
// This line calls the Animal constructor function, making Rabbit inherit name and eats properties from Animal.
// The call() methods sets this inside hte animal to be the new rabbit instance.

function Rabbit(name) {
    Animal.call(this, name); // Call the parent constructor. In JS, the call method is used to call a function within a specific this value and arguments.
    this.jumps = true;
}
/*
In the context of constructors, using call allows you to invoke a constructor function (Animal in this case) with a this value that points to another object (the new Rabbit instance).
*/

// Set Rabbit's prototype to be an instance of Animal.
// This sets up the protoype chain. It sets the rabbit prototype to an object that is a copy of the Animal.prototype.
// This means that any Rabbit instance will inherit methods from Animal.prototype.
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit; // Fixes the constructor reference. By default setting the prototype would overite the constructor property.
// So we mannualy set it back to Rabbit.

// This defines a method jump() on the Rabbit.prototype. All instances will have this method.
Rabbit.prototype.jump = function() {
    console.log(this.name + " jumps");
};

/*
Summarising all of this:
When you create a Rabbit object:

Call the Constructor: let rabbit = new Rabbit("Bunny");

Rabbit constructor is called.
Inside the Rabbit constructor, Animal.call(this, name) is executed, setting this.name to "Bunny" and this.eats to true.
this.jumps is set to true.
Prototype Chain:

rabbit is an instance of Rabbit.
rabbit.__proto__ points to Rabbit.prototype.
Rabbit.prototype.__proto__ points to Animal.prototype.
*/ 

let rabbit = new Rabbit("Bunny");

console.log(rabbit.name); // "Bunny" (own property)
console.log(rabbit.eats); // true (inherited from Animal)
console.log(rabbit.jumps); // true (own property)

rabbit.walk(); // "Bunny walks" (inherited from Animal.prototype)
rabbit.jump(); // "Bunny jumps" (defined in Rabbit.prototype)


