module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Elbrus',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
