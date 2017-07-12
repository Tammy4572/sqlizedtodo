'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('ToDoModels', {
      completed: {
        type: Sequelize.BOOL
      },
      content: {
        type: Sequelize.STRING
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('ToDoModels');
  }
};