'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          
      await queryInterface.bulkInsert('users', [
        {
            username: 'Juliancho',
            email: 'juliancho@gmail.com',
            password: '123456'
        },
        {
          username: 'Danieluca',
          email: 'Danieluca@gmail.com',
          password: '123456'
        },
        {
          username: 'Camilo culo ancho',
          email: 'Camiloculoancho@gmail.com',
          password: '123456'
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
