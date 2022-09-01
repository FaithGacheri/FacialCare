const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '85edd5395fmsha779fa294ddb9b3p196b8fjsnd748b9de38b5',
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
	}
};

fetch('https://sephora.p.rapidapi.com/auto-complete?q=eyeshadows', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));