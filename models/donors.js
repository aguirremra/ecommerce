console.log('models/donors.js loaded');
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
		},
		email:{
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	// {	
	// 	timestamps: true
	// },
	{
		classMethod: {
			associate: function(models){
				//Donors.hasMany(models.Recipient)
			}
		}
	});
	
	return Donors;
};