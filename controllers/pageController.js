var db = require("../models");

const controller = function() {

	this.getHome = function(req, res){
    db.Flowers.findAll({
    }).then(function(data){
      var hbObj = {
        flowers: data
      }
      res.render('index', hbObj);
      console.log(hbObj);
    });
  };

  this.getDonate = function(req, res){
    db.Flowers.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(data){
      console.log(data);
      var hbObj = {
        flowers: data
      }
      // if this flower doesn't exist
      // res.redirect('/');
      
      res.render('donate', hbObj);
    })
    .catch(function(err){
      console.log(err);
    });
  };

  // anything that renders with res.render() should be in the pageController
  // the api controller should be returning json, as you might expect from an API

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


  return this;
};


module.exports = controller;