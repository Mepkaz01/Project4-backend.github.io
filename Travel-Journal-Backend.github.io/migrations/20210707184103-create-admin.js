'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      bucketList1: {
        type: Sequelize.STRING
      },
      bucketPhoto1: {
        type: Sequelize.STRING
      },
      bucketList2: {
        type: Sequelize.STRING
      },
      bucketPhoto2: {
        type: Sequelize.STRING
      },
      bucketList3: {
        type: Sequelize.STRING
      },
      bucketPhoto3: {
        type: Sequelize.STRING
      },
      bucketList4: {
        type: Sequelize.STRING
      },
      bucketPhoto4: {
        type: Sequelize.STRING
      },
      bucketList5: {
        type: Sequelize.STRING
      },
      bucketPhoto5: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Admins');
  }
};