console.log('models/accounts.js loaded');
module.exports = function(sequelize, DataTypes){

var Accounts = sequelize.define("Accounts", {
	first_name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	last_name: {
		type: DataTypes.STRING,
		allowNull: true
	},
	email: {
		type: DataTypes.TEXT,
		allowNull: false
	}
	});
	return Accounts;
};