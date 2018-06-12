//DESTRUCTURING

//destructure object
const team = ['Julie', 'Jeff', 'Madge', 'David'];

const [captain, assistant, ...players] = team;
//players === ['Madge', 'David'];

//destructure deep object
const person = {
	first: 'Julie',
	last: 'Edwards',
	links: {
		social: {
			twitter: 'https://twitter.com/julie',
			instagram: 'https://instagram.com/julie'
		}
		web: {
			blog: 'https://blog.com/julie'
		}
	}
}

const PersonComponent (person) => {
	const {first, last} = person;
	const {twitter, instagram:insta} = person.links.social;

	const peopleStuff = `
		<div>${first}</div>
		<div>${tweet}</div>
	`
}

//swap two variable
[current, previous] = [previous, current]