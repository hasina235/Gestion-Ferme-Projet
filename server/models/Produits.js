
const Mammifere = require('../models/Mammifere');
const Oiseau = require('../models/Oiseau');

module.exports = (sequelize, DataTypes) => {
    const Produits = sequelize.define("Produits", {
        // sourceId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: Mammifere,
        //         model: Oiseau,
        //         key: Mammifere.idAnimal,
        //         key: Oiseau.idAnimal,
        //     },
        // },
        nomProduit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prix: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    });
    
    Produits.associate = (models) => {
        Produits.belongsTo(models.Mammifere, {
            foreignKey: 'sourceId',
            constraints: false,
            as: 'mammiferes'
        });
        Produits.belongsTo(models.Oiseau, {
            foreignKey: 'sourceId',
            constraints: false,
            as: 'oiseaux'
        });
        Produits.hasOne(models.Stocks, {
            foreignKey: 'produitId',
            onDelete: 'CASCADE'
        });
    };
    return Produits;
}