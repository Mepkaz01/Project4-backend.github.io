'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        country: 'Peru',
        city: 'Cusco',
        thingsToDo: 'Machu Picchu, Rainbow Mountain, Humantay Lagoon, Sacrad Valley, Inca Trail, City Tour of Cusco, Archeological Park of Sacsayhuaman',
        whereToEat: 'Rucula, Inkazuela, Faustina and Mercado de San Pedro',
        whereToStay: 'Palacio del Inka',
        tips: 'Definitely the Inca Trail, one of the best hikes across the world where you will experience incredible views of ruins, mountains, beautiful waterfalls and luscious jungle.',
        cost: 450.89,
        image: 'https://wallpaperaccess.com/full/652483.jpg',
        favorite: 0,
        adminId: 1
      }],

      { });
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});   
  }
};
