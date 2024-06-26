/*
What is Inheritance?
Inheritance allows one object to inherit properties and methods from another object. This helps in reusing code and creating a more organized and modular structure.

Prototype Inheritance:
Prototype inheritance is the original inheritance model in JavaScript where objects inherit directly from other objects.

Class Inheritance:
Class inheritance, introduced in ES6, provides a more familiar and declarative syntax for creating and managing constructor functions and handling inheritance. It is syntactic sugar over prototype-based inheritance, making the code more readable and easier to manage.

How Does Inheritance Work with Prototypes?
In JavaScript, inheritance is implemented through prototypes. When you create a new object, you can set its prototype to another object, allowing it to inherit properties and methods from that object.
*/

// Defining a constructor function
function Animal(name) {
    this.name = name;
    this.eats = true;
}

// This defines a walk method on Animal.prototype. All Animal instances will share this method.
Animal.prototype.walk = function() {
    console.log(this.name + " walks");
};

/*
This part of the code sets up instance properties. 
When you create a new Rabbit instance, Animal.call(this, name) initializes name and eats properties on the new instance, and this.jumps = true adds the jumps property.
*/

// Creating a Subclass for creating Rabbit objects.
// This line calls the Animal constructor function, making Rabbit inherit name and eats properties from Animal.
// The call() method sets this inside the Animal to be the new rabbit instance.

function Rabbit(name) {
    Animal.call(this, name); // Call the parent constructor. In JS, the call method is used to call a function with a specific this value and arguments.
    this.jumps = true; // Add the jumps property to the Rabbit instance
}

/* This part sets up the prototype chain so that Rabbit instances inherit methods from Animal.prototype. */

/*
In the context of constructors, using call allows you to invoke a constructor function (Animal in this case) with a this value that points to another object (the new Rabbit instance).
*/

// Set Rabbit's prototype to be an instance of Animal.
// This sets up the prototype chain. It sets the Rabbit prototype to an object that is a copy of the Animal.prototype.
// This means that any Rabbit instance will inherit methods from Animal.prototype.
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit; // Fixes the constructor reference. By default, setting the prototype would overwrite the constructor property.
// So we manually set it back to Rabbit.

// This defines a method jump() on the Rabbit.prototype. All instances will have this method.
Rabbit.prototype.jump = function() {
    console.log(this.name + " jumps");
};

/*
Summarizing all of this:
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

/*
Class Inheritance Example:

Class inheritance provides a more modern and intuitive way to create and manage inheritance hierarchies.
Here’s how you can achieve the same inheritance using class syntax:
*/

class AnimalClass {
    constructor(name) {
        this.name = name;
        this.eats = true;
    }

    walk() {
        console.log(this.name + " walks");
    }
}

class RabbitClass extends AnimalClass {
    constructor(name) {
        super(name); // Call the parent constructor. Runs the parent class's setup code. t helps the new RabbitClass object get properties from AnimalClass (like name and eats).
        this.jumps = true;
    }

    jump() {
        console.log(this.name + " jumps");
    }
}

let rabbitClass = new RabbitClass("Bunny");

console.log(rabbitClass.name); // "Bunny" (own property)
console.log(rabbitClass.eats); // true (inherited from AnimalClass)
console.log(rabbitClass.jumps); // true (own property)

rabbitClass.walk(); // "Bunny walks" (inherited from AnimalClass.prototype)
rabbitClass.jump(); // "Bunny jumps" (defined in RabbitClass.prototype)
