'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('providers', [
    {
      id: 1,
      name: "CEDENTE 002",
      tradingName: "CEDENTE 002 LTDA",
      cashforceTax: null,
      responsibleName: null,
      responsibleEmail: null,
      responsiblePosition: null,
      responsiblePhone: null,
      responsibleMobile: null,
      website: null,
      postalCode: null,
      address: null,
      number: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null,
      bank: null,
      bankAgency: null,
      account: null,
      documents: null,
      phoneNumber: null,
      situation: null,
      situationDate: null,
      cnpjId: 2,
      email: null,
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('providers', null, {});
  }
};
