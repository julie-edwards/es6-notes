//OBJECT LITERALS

/*
~~~ Overview
*/

const first = 'shiku';
const last = 'edwards';
const age = 10;
const breed = 'pharaoh adorbfluff';
const colorKey = 'catColor';
const color = ['black', 'white'];

const cat = {
	first,
	last,
	age,
	title: breed,
	pals: ['rose', 'leo'],
	[`${colorKey}Shiku`]: findColors(color) //can do js in assignment
}

//method syntax
const modal = {
	create: function() { //works
		//stuff
	}
	open() { //better
		//stuff
	}
}