var db = require("../models");

const controller = function() {

    this.updateRecipient = function(req, res) {
        db.Recipients.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function(data) {
            res.json(data);
        });
    };

    this.updateDonor = function(req, res) {
        db.Donors.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function(data) {
            res.json(data);
        });
    };

    this.createDonor = function(req, res) {
        db.Donors.create(req.body).then(function(data) {
            res.json({
                id: data.dataValues.id,
                name: "donor"
            });
            console.log(data);
        });
    };

    this.createRecipient = function(req, res) {
        db.Recipients.create(req.body).then(function(data) {
            res.json({
                id: data.dataValues.id,
                name: "recipient"
            });
            console.log(data);
        });
    };

    this.createFlower = function(req, res) {
        db.Flowers.create(req.body).then(function(data) {
            res.json(data.id);
        });
    };

    this.createTransaction = function(req, res) {
        db.Transactions.create(req.body).then(function(data) {
            res.json(data.id);
            console.log(data.id);
        });
    };

    return this;
};


module.exports = controller;