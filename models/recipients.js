module.exports = function(sequelize, DataTypes){

var Recipients = sequelize.define("Recipients", {

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
		email:{
			type: DataTypes.TEXT,
			allowNull: true
		},
		address:{
			type: DataTypes.TEXT,
			allowNull: false
		}
		},{
		classMethod: {
			associate: function(models){
				Recipients.hasOne(models.Donors)
			}
		}
	});
		
	return Recipients;
};