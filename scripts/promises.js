// A promise is used to represent the result of an asynchronous operation

// const isDataAvailable = false;

// const promise = new Promise((resolve, reject) => {
// 	if (isDataAvailable === true) {
// 		setTimeout(() => {
// 			return resolve("Data was fetched successfully");
// 		}, 2000);
// 	} else {
// 		return reject("Failed to fetch data");
// 	}
// });

// console.log(promise);

// setTimeout(() => {
// 	console.log(promise);
// }, 2000);

// promise
// 	.then((response) => console.log(response))
// 	.catch((error) => console.log(error));

function fetchData() {
	let userData = fetch("https://fakestoreapi.com/users");

	userData
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
}

fetchData();
