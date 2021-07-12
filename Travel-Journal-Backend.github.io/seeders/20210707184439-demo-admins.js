'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', [
      {
        name: 'Patricia Huancaya',
        username: 'pattyh',
        password: 'password',
        about: "I love meeting new people and learning about the places they come from. I'm happy to share and tell you a little bit about my past journeys, the places I've visited and hoping this will help you plan your next adventure.",
        photo: 'https://image.shutterstock.com/image-vector/female-photographer-holds-camera-takes-260nw-1395353831.jpg',
        bucketList1: 'Walk along the Great Wall of China',
        bucketPhoto1: 'https://tourscanner.com/blog/wp-content/uploads/2018/04/great-wall-of-china.jpg',
        bucketList2: 'Hike to Christ the Redeemer',
        bucketPhoto2: 'https://tourscanner.com/blog/wp-content/uploads/2018/04/christ-the-reedemer.jpg',
        bucketList3: 'Discover the Amazon Rainforest and River',
        bucketPhoto3: 'https://tourscanner.com/blog/wp-content/uploads/2018/04/amazon-rainforest.jpg',
        bucketList4: 'Sail on Ha Long Bay',
        bucketPhoto4: 'https://tourscanner.com/blog/wp-content/uploads/2019/09/12-Halong-Bay-Day-Trip.jpg',
        bucketList5: 'Dive on the Great Barrier Reef',
        bucketPhoto5: 'https://tourscanner.com/blog/wp-content/uploads/2018/04/great-barrier-reef.jpg'

      }], {});  
      
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {});
  }
};
