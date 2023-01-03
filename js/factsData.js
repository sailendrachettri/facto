const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c78fb667a3msh7d7e2fb02212684p19c0a3jsn6c1847f46e85',
		'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
	}
};

let factInfo = document.getElementById('factInfo');

function changeFact() {

	fetch('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', options)
		.then(response => response.json())
		.then((response) => {
			factInfo.innerHTML = response[0].fact + '.';
		})
		.catch(err => console.error(err));

}
changeFact();
setInterval(changeFact, 11000);

