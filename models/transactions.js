module.exports = function(sequelize, DataTypes){

var Transactions = sequelize.define("Transactions", {
		donor_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		recipient_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		flower_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		quantity_donated: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
		});

	return Transactions;
};