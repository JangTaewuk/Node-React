module.exports = (sequelize,DataTypes) => {
    const Todo =  sequelize.define('tbl_todo',{
        title: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        timestamps: false,
    });

    Todo.associate = function(models) {
        // associations can be defined here
      };

      return Todo;
};