var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/otra', (req, res, next) => {
  res.send('otra pagina que he hecho');
})

module.exports = router;
