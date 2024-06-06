module.exports = (sequelize, DataTypes) => {
    const Mammifere = sequelize.define("Mammifere", {
        race: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        litreLaitParJour: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        dateEntreeFerme: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })

    Mammifere.associate = (models) => {
        Mammifere.belongsTo(models.Animals, {
            foreignKey: 'idAnimal',
            constraints: false,
            scope: {
                type: 'Mammifere'
            }
        });
        Mammifere.hasOne(models.Produits, {
            foreignKey: 'sourceId',
            constraints: false,
            as: 'produit'
        })
    }


    return Mammifere;
}