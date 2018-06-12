//TEMPLATE STRINGS

/*
~~~ Overview
*/

//math
const dogYears = `My dog ${name} is ${age * 7} years old!`;

//multi line, good for html
//conditional for object property
const peron = {
	name: 'Julie',
	job: 'Web Developer',
	city: 'Seattle',
	bio: 'Julie is great!'
};

const markup = `
	<div class="person">
		<h2>
			${person.name}
			<span class="job">${person.job}</span>
		</h2>
		<p class="location">${person.city}</p>
		<p class="bio">${person.bio}</p>
		${person.conact ? `<p class="contact">${person.contact}</p>` : ''}
	</div>
`;

document.body.innerHTML = markup;

//nestable
const dogs = [
	{ name: 'Snickers', age: 2 }
	{ name: 'Jugo', age: 9 }
	{ name: 'Hugo', age: 12 }
];

const markup = `
	<ul class="dogs">
		${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
	</ul>
`;

//check for characters in string

string.startsWith()
string.endsWith('mid', 11) //first 11 chars end with 'mid'
string.includes()
string.repeat() //good for printing variable number of times