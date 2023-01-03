'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        phoneNumber: null,
        mobile: null,
        departament: null,
        verificationCode: '',
        emailChecked: 1,
        cashforceAdm: 1,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
