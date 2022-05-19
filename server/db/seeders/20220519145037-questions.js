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
      // 3 фаза
      question: 'Какое культурное прозвище у Коли 50 грамм ? ',
      answer: 'Сомелье',
      isActive: true,
      price: 200,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Какой студент любит кувыркаться в телеге?',
      answer: 'Дима',
      isActive: true,
      price: 400,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Что рыжее у Николая "кинопоиск"?',
      answer: 'борода',
      isActive: true,
      price: 600,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Сколько душнил на 3 фазе?',
      answer: 'Если окна открыты , их нет',
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
    }, {
      //  --- всякая всячина
      question: 'Кто угрожает Чапалахами , но не раздает их ?',
      answer: 'Анна',
      isActive: true,
      price: 200,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Что обычно не работает внизу ?',
      answer: 'Дверь',
      isActive: true,
      price: 400,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Кто отменил ресницы , чтобы поехать на природу?',
      answer: 'Катя',
      isActive: true,
      price: 600,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: 'Сколько выпускников повесили на кухне "фотографий" ?',
      answer: '25',
      isActive: true,
      price: 800,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: 'Рыба или Мясо?',
      answer: 'Птица',
      isActive: true,
      price: 1000,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      // тема Elbrus Имена
      question: 'Самое популярное имя в Elbrus?',
      answer: 'Lexa',
      isActive: true,
      price: 200,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: 'Кто держит марку качества СЭМА ?',
      answer: 'Коля',
      isActive: true,
      price: 400,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: 'Самая тихая девушка в Elbrus?',
      answer: 'Настя',
      isActive: true,
      price: 600,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: 'Какое иностраное имя мы используем при регистрации ?',
      answer: 'Игорьбек',
      isActive: true,
      price: 800,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: 'Кто назвал Алексея преподавателя Бубочкой?',
      answer: 'Анна',
      isActive: true,
      price: 1000,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
       // тема хиханьки да хахоньки
      question: 'Что Кирил поднял Вове???',
      answer: 'базу данных',
      isActive: true,
      price: 200,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: 'Кому на третьей фазе , не третий десяток идет ? ',
      answer: 'РусРедьюс',
      isActive: true,
      price: 400,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: '',
      answer: '',
      isActive: true,
      price: 600,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: '',
      answer: '',
      isActive: true,
      price: 800,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: '',
      answer: '',
      isActive: true,
      price: 1000,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
       // тема
      question: '',
      answer: '',
      isActive: true,
      price: 200,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: '',
      answer: '',
      isActive: true,
      price: 400,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: '',
      answer: '',
      isActive: true,
      price: 600,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: '',
      answer: '',
      isActive: true,
      price: 800,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      question: '',
      answer: '',
      isActive: true,
      price: 1000,
      id_theme: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
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
