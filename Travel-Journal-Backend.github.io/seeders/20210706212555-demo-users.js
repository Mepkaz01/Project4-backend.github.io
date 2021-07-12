'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
    {
      name: 'Jane Doe',
      email: 'jd@test.com',
      password: 'password',
      interest: 'I love to hike and camp.',
      photo: ''
    }], {});  
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
