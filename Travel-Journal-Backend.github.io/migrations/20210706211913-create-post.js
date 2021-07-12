'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      thingsToDo: {
        type: Sequelize.STRING
      },
      whereToEat: {
        type: Sequelize.STRING
      },
      whereToStay: {
        type: Sequelize.STRING
      },
      tips: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.NUMERIC
      },
      image: {
        type: Sequelize.STRING
      },
      favorite: {
        type: Sequelize.INTEGER
      },
      adminId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};