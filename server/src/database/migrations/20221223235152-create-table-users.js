'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      mobile: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      departament: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      verificationCode: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      emailChecked: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      cashforceAdm: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
