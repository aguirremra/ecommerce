module.exports = function(sequelize, DataTypes){

var Donors = sequelize.define("Donors", {
	first_name: {
		type: DataTypes.STRING,
		allowNull: true
	},
	last_name: {
		type: DataTypes.STRING,
		allowNull: true
	},
	username:{
		type: DataTypes.STRING,
		allowNull: true
	}
	});
	return Donors;
};