'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('home', { 
      id: {
        type: Sequelize.INTEGER 
      },
      image: {
        type: Sequelize.STRING
      },

      textBlog: {
        type: Sequelize.STRING
      }
    });  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('users');
     
  }
};
