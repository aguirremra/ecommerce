module.exports = function(sequelize, DataTypes){

var Recipients = sequelize.define("Recipients", {

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
	return Recipients;
};