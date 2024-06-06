module.exports = (sequelize, DataTypes) => {
    const Oiseau = sequelize.define("Oiseau", {
        plumes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombreOeufsParJour:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dateEntreeFerme: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        
    })

    Oiseau.associate = (models) => {
        Oiseau.belongsTo(models.Animals, {
            foreignKey: 'idAnimal',
            constraints: false,
            scope: {
                type: 'Oiseau'
            }
        });
        Oiseau.hasOne(models.Produits, {
            foreignKey: 'sourceId',
            constraints: false,
            as: 'produit'
        })
    }

    return Oiseau;
}