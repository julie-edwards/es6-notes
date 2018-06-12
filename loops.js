//LOOPS

/*
~~~ Arrays
*/

const cats = ['rose', 'shiku', 'leo', 'aster'];

//for of loop
for (const cat of cats) {
	console.log(cat);
}

//for in with index
for (const [i, cat] of cats.entries()) {
	console.log(`${cat} is cat ${i}`);
	//same as cat[0], cat[1];
}

//iterate over pseudo array object 'arguments'
function addNumbers() {
	let total = o;
	for (const num of arguments) {
		total += num;
	}
	return total;
}

addNumbers(4,5,6,4,44,98);


/*
~~~ Objects
*/

const apple = {
	color: 'red',
	type: 'figi',
	size: 'big',
	weight: 9
}

//keys, values
for (const prop of Object.keys(apple)) {
	console.log(prop); //color, type, size, weight
	console.log(apple[prop]); //red, figi, big, 9
}

//simpler to use a for in for objects
for (const prop in apple) {
	console.log(prop); //color, type, size, weight
	console.log(apple[prop]); //red, figi, big, 9
}
