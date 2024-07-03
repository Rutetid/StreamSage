const express = require("express");
const router = express.Router();


router.get("/home", async (req, res) => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5fe7fe5b30msh4d9bec7cfca65e4p15f6f7jsn042dbac6f25b',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    res.json(result);
	console.log(result);
} catch (error) {
	console.error(error);
}
});

module.exports = router;
