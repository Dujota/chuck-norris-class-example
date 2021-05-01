const request = require('request');

const categoriesURL = 'https://api.chucknorris.io/jokes/categories';
const jokeURL = 'https://api.chucknorris.io/jokes/random?category=';

function index(req, res) {
  request(categoriesURL, function (err, resp, categoriesJSON) {
    const categories = JSON.parse(categoriesJSON);

    if (req.query.category) {
      request(jokeURL + req.query.category, function (err, resp, jokeJSON) {
        const joke = JSON.parse(jokeJSON);
        res.render('index', { categories, joke: joke.value, categoryChosen: req.query.category });
      });
    } else {
      res.render('index', { categories, joke: null, categoryChosen: null });
    }
  });
}

module.exports = { index };
