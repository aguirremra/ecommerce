var expect = require("expect.js");

describe("models/donors", function(){
	before(function(){
		return require("../../models").sequelize.sync();

	});

	beforeEach(function(){
		this.Donors = require("../../models").Donors;
	});
});
