'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true,
      },
      orderFileName: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true,
      },
      emissionDate: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      pdfFile: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      CTE: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      value: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      buyerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      providerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: 0,
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: 0,
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        defaultValue: null,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
