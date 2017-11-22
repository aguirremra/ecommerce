var path = require("path");

var pageController = require('../controllers/pageController')();

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.handlebars
  app.get('/', pageController.getHome);

  app.get('/donate/:id', pageController.getDonate);

  app.get('/donors', pageController.getDonors);

  app.get('/recipients', pageController.getRecipients);

  app.get('/donor/:id', pageController.getOneDonor);

  app.get('/recipient/:id', pageController.getOneRecipient);

};