module.exports = (sequelize, DataTypes) => {
    var Burguer = sequelize.define('Burguer', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Description: {
            type: DataTypes.STRING(254),
            allowNull: false,
        },
        Eaten: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        },
        Updated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        }

    }, {
        timestamps: false
    });

    return Burguer;
};