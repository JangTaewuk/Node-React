module.exports = (sequelize,DataTypes) => {
    return sequelize.define('tbl_todo',{
        title: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
};