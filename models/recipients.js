console.log('models/recipients.js loaded');
module.exports = function(sequelize, DataTypes){

var recipients = sequelize.define("recipients", {

	first_name: {
		type: DataTypes.STRING,
		allowNull: true
	},
	last_name: {
		type: DataTypes.STRING,
		allowNull: true
	},
	email:{
		type: DataTypes.TEXT,
		allowNull: true
	},
	address:{
		type: DataTypes.TEXT,
		allowNull: true
	}
	});
	return recipients;
};