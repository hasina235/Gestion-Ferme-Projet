module.exports = (sequelize, DataTypes) => {
    const Animals = sequelize.define("Animals", {
        idAnimal: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categorie: {
            type: DataTypes.STRING, //"bovin" ou "porcin" ou "volail"
            allowNull: false,
        },
    });

    Animals.associate = (models) => {
        Animals.hasOne(models.Ferme,{
            foreignKey: 'numFerme',
            onDelete: 'CASCADE',
        })
    }
    return Animals;
}