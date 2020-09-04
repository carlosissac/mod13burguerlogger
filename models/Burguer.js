module.exports = (sequelize, DataTypes) => {
    var Burguer = sequelize.define('Burguer', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        BurguerDesc: {
            type: DataTypes.STRING(254),
            allowNull: false,
        },
        Eaten: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Create: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        },
        Update: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        }
    }, {
        timestamps: true,
        createdAt: 'Create',
        updatedAt: 'Update'
    });

    return Burguer;
};