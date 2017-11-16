module.exports = function(sequelize, DataTypes){
var Inventory = sequelize.define("Inventory", {
	flower_name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	imageurl_thumbnail: {
		type: DataTypes.STRING,
		allowNull: false
	},
	imageurl_large: {
		type: DataTypes.STRING,
		allowNull: false
	}
	});
	return Inventory;
};