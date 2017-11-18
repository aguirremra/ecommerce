var db = require("../models");

const controller = function() {

  this.getAllFlowers = function(req, res){
    db.Flowers.findAll({
    }).then(function(data){
      var hbObj = {
        flowers: data
      }
      res.render('index', hbObj);
      console.log(hbObj);
    });
  };

  this.getOneFlower = function(req, res){
    db.Flowers.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(data){
      var hbObj = {
        flowers: data
      }
      res.render('donate', hbObj);
    });
  };

  this.getDonors = function(req, res){
    db.Donors.findAll({
    }).then(function(data){
      var hbObj = {
        donors: data
      }
      res.render('admin', hbObj);
    });
  };

  this.getRecipients = function(req, res){
    db.Recipients.findAll({
    }).then(function(data){
      var hbObj = {
        recipients: data
      }
      res.render('admin', hbObj);
    });
  };  

  this.getOneDonor = function(req, res){
    db.Donors.findAll({
      where: {
        id: req.params.id
      }      
    }).then(function(data){
      var hbObj = {
        donors: data
      }
      res.render('admin', hbObj);
    });
  };

  this.getOneRecipient = function(req, res){
    db.Recipients.findAll({
      where: {
        id: req.params.id
      }      
    }).then(function(data){
      var hbObj = {
        recipients: data
      }
      res.render('admin', hbObj);
    });
  };

  this.updateRecipient = function(req, res){
    db.Recipients.update(
      req.body,
      {
      where: {
        id: req.params.id
      }      
    }).then(function(data){
      res.json(data);
    });
  };

  this.updateDonor = function(req, res){
    db.Donors.update(
      req.body,
      {
      where: {
        id: req.params.id
      }      
    }).then(function(data){
      res.json(data);
    });
  };

  this.createDonor = function(req, res){
    db.Donors.create(req.body).then(function(data){
      res.json(data);
      console.log(data.id);
    });
  };

  this.createRecipient = function(req, res){
    db.Recipients.create(req.body).then(function(data){
      res.json(data);
    });
  };

  this.createFlower = function(req, res){
    db.Flowers.create(req.body).then(function(data){
      res.json(data);
    });
  };

  this.createTransaction = function(req, res){
    db.Transactions.create(req.body).then(function(data){
      res.json(data);
    });
  };         
  
  return this;
};


module.exports = controller;