var apiController = require('../controllers/apiController')();

module.exports = function(app){
  app.get('/api/flowers', apiController.getAllFlowers);

  // app.post('/api/flowers', apiController.createFlower);
}