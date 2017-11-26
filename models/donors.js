console.log('models/donors.js loaded');
module.exports = function(sequelize, DataTypes){

var Donors = sequelize.define("Donors", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        		len: [2, 140]
      		}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        		len: [2, 140]
      		}
		},
		username:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        		len: [2, 140]
      		}
		},
		email:{
			type: DataTypes.STRING,
			allowNull: true
		}
	
 	},{
		classMethod: {
			associate: function(models){
				Donors.hasOne(models.Recipients)
			}
		}
	}, {
		classMethod: {
			associate: function(models){
				Donors.BelongsToMany(models.Transactions,{
					onDelete: "CASCADE",
					foreignKey:{
						allowNull: false
					}
				})
			}
		}
	});
	
	return Donors;
};