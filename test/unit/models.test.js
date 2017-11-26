var expect = require("expect.js");

describe("models/donors", function(){
	before(function(){
		return require("../../models").sequelize.sync();

	});

	beforeEach(function(){
		this.Donors = require("../../models").Donors;
		this.Recipients = require("../../models").Recipients;
		this.Flowers = require("../../models").Flowers;
		this.Transactions = require("../../models").Transactions;

	});

	describe("create", function(){
		it( "creates a donor", function(){
			return this.Donors.create({
				first_name: "john",
				last_name: "doe",
				username: "jonny123",
				email: "jdoe@gmail.com"
			});
		});
	});

	describe("create", function(){
		it( "creates a recipient", function(){
			return this.Recipients.create({
				first_name: "free",
				last_name: "loader",
				email: "floadergmail.com",
				address: "123 broadway"
			});
		});
	});

	describe("create", function(){
		it( "creates a flower", function(){
			return this.Flowers.create({
				flower_name: "lilly of the valley",
				description: "Nice valley flowers",
				quantity: 24,
				imageurl_thumbnail: "flowers.com/thumbnail",
				imageurl_large: "flowers.com/large"
			})
		})
	})
});
