module.exports = function(sequelize, DataTypes){
var Flowers = sequelize.define("Flowers", {
		flower_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        		len: [1, 140]
      		}
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
		
	}, {
		classMethod: {
			associate: function(models){
				Flowers.hasMany(models.Donors)
			}
		}
	}, {
		classMethod: {
			associate: function(models){
				Flowers.hasMany(models.Recipients)
			}
		}
	});
	
	return Flowers;
};