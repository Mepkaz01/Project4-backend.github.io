'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bookmarks', [
      {
          userId: 1,
          postId: 1
      }
      
    ], {})
    
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
