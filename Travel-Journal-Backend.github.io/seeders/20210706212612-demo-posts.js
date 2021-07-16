'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        country: 'Peru',
        city: 'Cusco',
        thingsToDo: 'Machu Picchu, Rainbow Mountain, Humantay Lagoon, Sacrad Valley, Inca Trail, City Tour of Cusco, Archeological Park of Sacsayhuaman',
        whereToEat: 'Rucula, Inkazuela, Faustina and Mercado de San Pedro',
        whereToStay: 'Aguas Calientes, Sacred Valley, Cusco Main Square',
        tips: 'Definitely the Inca Trail, one of the best hikes across the world where you will experience incredible views of ruins, mountains, beautiful waterfalls and luscious jungle.',
        cost: 950.89,
        image1: 'https://media.nomadicmatt.com/2020/incatrail3.jpg',
        image2: 'https://www.peruforless.com/blog/wp-content/uploads/2020/06/humantay-lake-cusco-glaciers.jpg',
        image3: 'https://assets.vogue.com/photos/5891d82d153ededd21da4035/master/w_1600%2Cc_limit/00-holding-sacred-valley-peru-travel-guide.jpg',
        bookmark: 0,
        adminId: 1
      },
      {
        country: 'Italy',
        city: 'Milan',
        thingsToDo: 'Piazza del Duomo, La Scala Opera, Brera District, Naviglio Grande, Milan Cathedral, Santa Maria delle Grazie',
        whereToEat: 'Panzarotti, Piadineria Artigianale Pacoli, VUN Andrea Aprea, Llmmagine Ristorante Bistrot',
        whereToStay: 'Brera District, Navigli, Piazza del Duomo',
        tips: 'Begin at the city center, then Porta Nuova and Isola to the Navigli District. Stay in Navigli for a good meal. Best time to go is between Sept and Oct',
        cost: 1030.15,
        image1: 'https://www.roadaffair.com/wp-content/uploads/2017/10/milan-duomo-shutterstock_403538707-1024x683.jpg',
        image2: 'https://www.roadaffair.com/wp-content/uploads/2017/10/last-supper-painting-milan-italy-shutterstock_525564748.jpg',
        image3: 'https://www.roadaffair.com/wp-content/uploads/2019/09/night-naviglio-milan-italy-shutterstock_201883006.jpg',
        bookmark: 0,
        adminId: 1
      },
      {
        country: 'Spain',
        city: 'Barcelona',
        thingsToDo: 'Gaudi Sites, Las Ramblas, Gothic Quarter, La Sagrada Familia, Park Guell and Tibidabo, Montserrat Monastery',
        whereToEat: 'Cerveseria Catalana, El Nacioanal, Mercado de la Boqueria',
        whereToStay: 'Gracia, La Barceloneta, El Born, Barri Gotic, El Raval',
        tips: 'Barcelona has great architecture, vibrant food scene and good nightlife. Visit Mercado de la Bogueria for lunch and El Nacional for dinner.',
        cost: 1043.21,
        image1: 'https://s27363.pcdn.co/wp-content/uploads/2019/03/Sagrada-Familia.jpg',
        image2: 'https://s27363.pcdn.co/wp-content/uploads/2019/03/3-Days-in-Barcelona.jpg.webp',
        image3: 'https://s27363.pcdn.co/wp-content/uploads/2019/03/La-Boqueria.jpg.webp',
        bookmark: 0,
        adminId: 1
      },
      {
        country: 'USA',
        city: 'Honolulu',
        thingsToDo: 'Manoa Falls, Ala Moana Center, Wakiki Beach, Polynesian Culture Center, Atlantis Adventures, Kuhio Beach Park, Hanauma Bay',
        whereToEat: 'Kens Fresh Fish, Over Easy, Helenas Hawaiian Food, Liliha Bakery, Maguro Brothers, The Pig and the Lady',
        whereToStay: 'Wakiki Neighborhood',
        tips: 'If you are visiting Moana Falls Trail, visit the Lyon Arboretum. Stay in Wakiki for a varity of shops, cafes, restaurants and museums',
        cost: 2689.31,
        image1: 'https://www.busytourist.com/wp-content/uploads/2019/08/Sunrise-from-Hanauma-Bay-on-Oahu-Hawaii.jpg.webp',
        image2: 'https://d.otcdn.com/imglib/hotelfotos/8/187/hotel-hilton-hawaiian-village-waikiki-beach-resort-honolulu-028.jpg',
        image3: 'https://www.busytourist.com/wp-content/uploads/2019/08/Polynesian-Culture-Center.jpg.webp',
        bookmark: 0,
        adminId: 1
      },
      {
        country: 'Mexico',
        city: 'Rivera Maya',
        thingsToDo: 'Tulum Ruins, Cenote Dos Ojos, Chichen Itza, Xcaret Park, Sian Kaan, Cozumel, Isla Mujures and Downtown Cancun',
        whereToEat: 'Resorts have a variety of restaurants included with your stay but if you feel like exploring, go to La Perla Pixan in Playacar',
        whereToStay: 'The Rivera Maya strip has a whole variety of hotels and resorts. If you like the nightlife, stay in Cancun or Playa del Carmen',
        tips: 'Best time to go is April, May, late November and start of December. Akumal and Tulum is the best place to stay and relax',
        cost: 750.89,
        image1: 'https://misstourist.com/wp-content/uploads/2017/09/9-Unforgettable-Things-To-Do-In-Riviera-Maya-cancun-660x395.jpg',
        image2: 'https://misstourist.com/wp-content/uploads/2017/09/1-maya-chichen-itza-precio-660x417.jpg',
        image3: 'https://misstourist.com/wp-content/uploads/2017/09/9-Unforgettable-Things-To-Do-In-Riviera-Maya-akumal-660x361.jpg',
        bookmark: 0,
        adminId: 1
      },
      {
        country: 'Portugal',
        city: 'Lisbon',
        thingsToDo: 'St. Georges Castle, Alfama, Sintra, Cascais, Lisbon by Boat, Monastery of St Jerome, Santa Justa Elevator',
        whereToEat: 'Pasteis de Belem, O Galito, Attla Restaurante, Coelho da Rocha',
        whereToStay: 'Graca, Baixa and Bairro Alto',
        tips: 'Try the natas in any pastry shop. St. Georges Castle offers one of the best views of Lisbon. Take a cruise on the Tagus. Take a day trip to Sintra.',
        cost: 810.71,
        image1: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/0dd721b8bd6567ce5ccb31cb378744fba1b87092/big-abed8fcba6a38c99f3bcdc8340a0b421.jpg',
        image2: 'https://westburyjoinery.com/wp-content/uploads/2019/08/Sintra-portugal-5.jpg',
        image3: 'https://content.r9cdn.net/rimg/dimg/85/16/c23fa210-city-21124-16750af1df0.jpg',
        bookmark: 0,
        adminId: 1
      },
      {
        country: 'Dominican Republic',
        city: 'Punta Cana',
        thingsToDo: 'Saona Island, Hoyo Azul & Scape Park, Macao Beach, Arena Gorda Beach',
        whereToEat: 'Resorts usually have a variety of restaurants included with your stay',
        whereToStay: 'Along the strip of Bavaro Beach',
        tips: 'Whether you like to hike, zipline, nature or just relax at Macao beach, day trips are the way to go.',
        cost: 850.89,
        image1: 'https://i.pinimg.com/originals/a0/a2/c8/a0a2c816bd6c7d719fb57261e9d65cda.jpg',
        image2: 'https://i2.wp.com/www.lovingbeaches.com/wp-content/uploads/2018/08/macao-beach-punta-cana-dominican-republic-6.jpg',
        image3: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_720/https://www.livingpuntacana.com/wp-content/uploads/2015/06/Dsc_2310.jpg',
        bookmark: 0,
        adminId: 1
      }],
      { });
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});   
  }
};
