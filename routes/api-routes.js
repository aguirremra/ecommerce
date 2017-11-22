var apiController = require('../controllers/apiController')();

module.exports = function(app){

  app.post('/api/donor', apiController.createDonor);
  
  app.post('/api/recipient', apiController.createRecipient);

  app.post('/api/flower', apiController.createFlower);

  app.put('/api/recipient/:id', apiController.updateRecipient);

  app.put('/api/donor/:id', apiController.updateDonor);

  app.post('/api/transaction', apiController.createTransaction);
}