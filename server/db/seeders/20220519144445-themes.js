module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Phase3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Ерунда',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Elbrus name',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Типо смешно',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Животные',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
