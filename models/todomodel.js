'use strict';
module.exports = function(sequelize, DataTypes) {
  var ToDoModel = sequelize.define('ToDoModel', {
    id: DataTypes.INTEGER,
    complete: DataTypes.BOOL,
    content: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ToDoModel;
};