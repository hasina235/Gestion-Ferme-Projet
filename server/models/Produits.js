
const Animals = require('../models/Animals');

module.exports = (sequelize, DataTypes) => {
    const Produits = sequelize.define("Produits", {
        nomProduit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typeProduit: {
            type: DataTypes.STRING, //"lait" ou "viande" ou "oeufs"
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING, // viande de porc
            allowNull: false,
        },
        dateProduction: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    });
    
    Produits.associate = (models) => {
        Produits.hasOne(models.Animals, {
            foreignKey: 'idAnimal',
            onDelete: 'CASCADE'
        });
    };
    return Produits;
}