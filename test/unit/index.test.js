var expect = require("expect.js");

describe("models/index", function(){
	it("Should return the donors model", function(){
		var models = require("../../models");
		expect(models.Donors).to.be.ok();
	});
	it("Should return the flowers model", function(){
		var models = require("../../models");
		expect(models.Flowers).to.be.ok();
	});
	it("Should return the recipients model", function(){
		var models = require("../../models");
		expect(models.Recipients).to.be.ok();
	});
	it("Should return the transactions model", function(){
		var models = require("../../models");
		expect(models.Transactions).to.be.ok();
	});
});