module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Questions', [{
      question: 'Какое прозвище у коли 50 грамм ? ',
      answer: 'Сомелье',
      isActive: true,
      price: 200,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Рыба или Мясо?',
      answer: 'Птица',
      isActive: true,
      price: 400,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Николай рыжий ?',
      answer: 'Только борода',
      isActive: true,
      price: 600,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Сколько душнил на фазе?',
      answer: 'Если окна открыты , то 0',
      isActive: true,
      price: 800,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'У кого есть банка для анализов?',
      answer: 'Антон',
      isActive: true,
      price: 1000,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
