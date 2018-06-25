//CLASSES

//created as a function with prototypes
function Dog(name, breed) {
	this.name = name;
	this.breed = breed;
}

const snickers = new Dog('Snickers', 'Pomeranian');

Dog.prototype.bark = function() {
	`Bark I'm a doge and my name is ${this.name} and i'm a ${this.breed}`;
}

//make it a CLASS
class Dog {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
	}
	bark() {
		console.log(`Bark I'm a doge and my name is ${this.name} and i'm a ${this.breed}`);
	}
	cuddle() {
		console.log('I luv u!');
	}
	static info() { //only called on Dog object, not specific instance
		console.log('this is the dog constructor');
	}
	get description() { //gets and sets are properties you can call
		return `${this.name} is a ${this.breed}`;
	}
	set nicknames(value) { //pass in value to set
		this.nick = value.trim();
	}
}

const snickers = new Dog('Snickers', 'Pomeranian');
const sunny = new Dog('Sunny', 'Poodle');

