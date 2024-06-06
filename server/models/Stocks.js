const Produits = require('../models/Produits');


module.exports = (sequelize, DataTypes) => {
    const Stocks = sequelize.define('Stocks', {
        numStock: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantiteEnStock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dateEntreeEnStock: {
            type: DataTypes.DATE,
            allowNull: false
        },
        // produitId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: Produits,
        //         key: Produits.id,
        //     },
        // }
    });

    Stocks.associate = (models) => {
        Stocks.belongsTo(models.Produits, {
            foreignKey: 'produitId',
            onDelete: 'CASCADE'
        });
    };
    return Stocks;
}