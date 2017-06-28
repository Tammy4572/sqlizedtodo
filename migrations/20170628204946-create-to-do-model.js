'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('ToDoModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      complete: {
        type: Sequelize.BOOL
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('ToDoModels');
  }
};