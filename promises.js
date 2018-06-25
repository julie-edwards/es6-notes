//PROMISES

//fetch browser functionality
const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');

postsPromise
	.then(data => data.json()) //specify format
	.then(data => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	})

//create your own promise

const p = new Promise((resolve, reject) => {
	resolve('julie is cool');
	setTimeout(() = {
		reject(Error('julie is not cool')); //error obj gives you info about what happened
	}, 1000);
});

p
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.error(err);
	});

