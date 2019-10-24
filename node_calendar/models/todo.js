var moment = require('moment');

module.exports = (sequelize,DataTypes) => {
    const Todo =  sequelize.define('tbl_todo',{
        title: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('startDate')).format('YYYY-MM-DD');
            },
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('endDate')).format('YYYY-MM-DD');
            },
            allowNull: false,
        },
        dayTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rotationMonth: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        allDay: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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