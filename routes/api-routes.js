var apiController = require('../controllers/apiController')();

module.exports = function(app){
  app.get('/api/flowers', apiController.getAllFlowers);

  app.get('/api/flowers/:id', apiController.getOneFlower);

  app.get('/api/donors', apiController.getDonors);

  app.get('/api/recipients', apiController.getRecipients);

  app.get('/api/donor/:id', apiController.getOneDonor);

  app.get('/api/recipient/:id', apiController.getOneRecipient);

  app.post('/api/donor', apiController.createDonor);
  
  app.post('/api/recipient', apiController.createRecipient);

  app.post('/api/flower', apiController.createFlower);

  app.put('/api/recipient/:id', apiController.updateRecipient);

  app.put('/api/donor/:id', apiController.updateDonor);

  app.post('/api/transaction', apiController.createTransaction);
}


//---Tesing Postaman
// Donor

//   {
//     "first_name": "Maria",
//     "last_name": "Reinbach",
//     "username": "mreinbach"
//   }

// Recipient

//   {
//     "first_name": "Maria",
//     "last_name": "Reinbach",
//     "email": "mreinbach",
//     "address": "1383 Borden Road, San Diego, CA 92026"
//   }

// Flower

//   {
//     "flower_name": "The Best Flowers",
//     "description": "These are the flowers that will make your wife love you forever!",
//     "quantity": 2,
//     "imageurl_thumbnail": "https://thumb.ibb.co/g89Ghm/candy_apple_min.jpg",
//     "imageurl_large:"https://thumb.ibb.co/g89Ghm/candy_apple_min.jpg"
//   }