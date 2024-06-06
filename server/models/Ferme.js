module.exports = (sequelize, DataTypes) => {

    const Ferme = sequelize.define("Ferme", {
        numFerme: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Ferme;
}