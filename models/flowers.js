console.log('models/flowers.js loaded');
module.exports = function(sequelize, DataTypes){

var flowers = sequelize.define("flowers", {
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
	// {	
	// 	timestamps: true,
	// 	deletedAT: 'destroyTime',
	// 	paranoid: true

		
	// });
	
	return flowers;
};