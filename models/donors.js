console.log('models/donors.js loaded');
module.exports = function(sequelize, DataTypes){

var Donors = sequelize.define("Donors", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        		len: [1, 140]
      		}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        		len: [1, 140]
      		}
		},
		username:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        		len: [1, 140]
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
	});
	
	return Donors;
};