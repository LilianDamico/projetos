'use strict';

const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('contatos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      }, 

      message: {
        type: Sequelize.STRING
      }      
    });     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('contatos');
    
  }
};
