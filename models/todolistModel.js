'use strict';
module.exports = function(sequelize, DataTypes) {
  var ToDoModels = sequelize.define('ToDoModels', {
    completed: DataTypes.BOOL,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ToDoModels;
};