const assert = require("chai").assert;
const app = require("../app");

describe("App", function(){
	it("app should return ready!", function(){
		assert.equal(app(), "ready!");
	});
});