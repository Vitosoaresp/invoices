'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cnpjs', [
      {
        id: 1,
        cnpj: '00000000000001',
        companyType: '2',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cnpjs', null, {});
  }
};
