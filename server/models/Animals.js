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
        type: {
            type: DataTypes.STRING, //"betail" ou "volail"
            allowNull: false,
        },
    })
    return Animals;
}