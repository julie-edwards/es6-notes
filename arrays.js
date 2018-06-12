//ARRAYS

/*
~~~ Array methods
*/

//FROM

//array.from with html data
`
<div class="cats">
	<p>Rose</p>
	<p>Leo</p>
	<p>Shiku</p>
</div>
`

const people = Array.from(document.querySelectorAll('.people p'));
const names = people.map(person => person.textContent);

//or

const people = document.querySelectorAll('.people p');
const names = Array.from(people, person => { //Array.from can take two arguments
	return person.textContent;
});

//REDUCE

//Array.reduce returns a single value
function sumAll() {
	const nums = Array.from(arguments);
	return arguments.reduce((prev, next) => prev + next, 0);
}
sumAll(2,45,57);

//OF

//array.of makes array from arguments
cats = Array.of('rose', 'leo', 'shiku');

//FIND, FINDINDEX
//get one item from array
//findIndex returns index
const shiku = cats.find(cat => cat.name === 'shiku');

//SOME
//returns boolean
const hasShiku = cats.some(cat => cat === 'shiku'); //true

//EVERY
const allShiku = cats.every(cat => cat === 'shiku'); //false


/*
~~~ Spread and Rest
*/

//SPREAD

const dances = ['salsa', 'tango', 'swing', 'ballroom'];
const sports = ['soccer', 'golf', 'gymnastics'];

const activities = [...dances, ...sports, 'painting'];

//clone array, rather than creating a new reference
const fridayActivities = [...activities];

//remove array item with splice
const comments = [
	{ id: 209384, text: 'I love your dog!' },
	{ id: 523423, text: 'Cuuute! 🐐' },
	{ id: 632429, text: 'You are so dumb' }, //mean :(
	{ id: 192834, text: 'Nice work on this wes!' },
];

const id = 632429;
const commentIndex = comments.findIndex(comment => comment.id === id);

const newComments = [...comments.slice(0,commentIndex), ...comments.slice(commentIndex + 1)];

//combine two arrays with push
const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];

inventors.push(...newInventors);

//pass array items as arguments
const name = ['julie', 'edwards'];

function sayHi(first, last) {
	alert(`hi ${first} ${last}`);
}

sayHi(...name);


//REST
//groups remaining params into array
function convertCurrency(rate, ...amounts) {
	return amounts.map(amount => amount * rate);
}

const amounts = convertCurrency(1.45, 10, 23, 47, 1, 52);

//destructure object
const player = ['player1', 9457, 3, 4, 9];

const [name, id, ...scores] = player;


















