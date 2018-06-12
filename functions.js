//ARROW FUNCTIONS

/*
~~~ Overview
*/

//concise
//anonymous
//implicit returns
//do not rebind 'this'
//'this' is bound to 'window' in outer context

const names = ['leo', 'rose', 'shiku'];

const fullNames = names.map(function(name) {
	return `${name} kitty`;
});

//don't need parantheses for one parameter
const fullNames2 = names.map(name => {
	return `${name} kitty`;
});

//implicit return, no curly braces
//if we implicitly return an object, wrap it in parens
const fullNames3 = names.map(name => `${name} kitty`);

//no parameters, empty parens
const fullNames4 = names.map(() => 'kitty');

//can be stored as variable
const sayMyName = (name) => { alert(`Hello ${name}!`)}

sayMyName('Julie');

/*
~~~ Default assignment
*/

function calculateBill(total, tax = 0.13, tip = 0.15) {
	return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100, undefined, 0.25);
//or, using destructuring
const totalBill = calculateBill(total: 100, tip: 0.25);

/*
~~~ Array manipulation
*/

//MAP object from array
const race = '100, Dash';
const winners = ['Hunter', 'Singa', 'Imda'];

const win = winners.map((winner, i) => ({
	name: winner, race, place: i + 1 //race shorthand for race: race
}))

//FILTER array with conditional
const ages = [12,13,67,34,56,112];

const old = ages.filter(age => age >= 60);


/*
~~~ When to use arrow functions
*/

//DON'T use an arrow here, you need this bound to 'box'!
const box = document.querySelector('.box');
box.addEventListener('click', function() {
	this.classList.toggle('opening');
	//DO use an arrow here so we don't rebind 'this'
	setTimeout(() => {
		this.classList.toggle('open');
	}, 500);
});

//DON'T use an arrow function to bind a method to an object
//or when you add a prototype to a method
const person = {
	point: 23,
	score() {
		this.points++;
	}
}

//DON'T use an arrow when you need an arguments object
const orderChildren = function() {
	const children = Array.from(arguments);
	return children.map((child, i) => {
		return `${child} was child #${i + 1}`;
	});
}
