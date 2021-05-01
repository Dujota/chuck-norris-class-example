function index(req, res) {
  res.render('index', { categories: ['music', 'dev'] });
}
module.exports = { index };
