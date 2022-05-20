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
      id_theme: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Что обычно не работает внизу ?',
      answer: 'Дверь',
      isActive: true,
      price: 400,
      id_theme: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Кто отменил ресницы , чтобы поехать на природу?',
      answer: 'Катя',
      isActive: true,
      price: 600,
      id_theme: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Сколько выпускников повесили на кухне "фотографий" ?',
      answer: '25',
      isActive: true,
      price: 800,
      id_theme: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Рыба или Мясо?',
      answer: 'Птица',
      isActive: true,
      price: 1000,
      id_theme: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      // тема Elbrus Имена
      question: 'Самое популярное имя в Elbrus?',
      answer: 'Lexa',
      isActive: true,
      price: 200,
      id_theme: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Кто держит марку качества СЭМА ?',
      answer: 'Коля',
      isActive: true,
      price: 400,
      id_theme: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Самая тихая девушка в Elbrus?',
      answer: 'Настя',
      isActive: true,
      price: 600,
      id_theme: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Какое иностраное имя мы используем при регистрации ?',
      answer: 'Игорьбек',
      isActive: true,
      price: 800,
      id_theme: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Кто назвал Алексея преподавателя Бубочкой?',
      answer: 'Анна',
      isActive: true,
      price: 1000,
      id_theme: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
       // тема хиханьки да хахоньки
      question: 'Что Кирил поднял Вове???',
      answer: 'базу данных',
      isActive: true,
      price: 200,
      id_theme: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Кому на третьей фазе , четвертый десяток? ',
      answer: 'Руслан',
      isActive: true,
      price: 400,
      id_theme: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Куда проще всего пройти кастинг мужчине ?',
      answer: 'В армию',
      isActive: true,
      price: 600,
      id_theme: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Где украсть миллион и не сесть ?',
      answer: 'В тюрьме',
      isActive: true,
      price: 800,
      id_theme: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Могу забыть написать вопрос, но если это произойдет , введите в ответ Elbrus!',
      answer: 'Ответ неверный, это мы платим Elbrus за обучение - 1000 ',
      isActive: true,
      price: 1000,
      id_theme: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
       // тема животные
      question: 'Прозвище у Дениса из Сов?',
      answer: 'Ягуар',
      isActive: true,
      price: 200,
      id_theme: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Кто в этой игре , должен быть в мешке?',
      answer: 'Кот',
      isActive: true,
      price: 400,
      id_theme: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Чья морда утыкаеться на йоге в пол?',
      answer: 'Собаки',
      isActive: true,
      price: 600,
      id_theme: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Кем становяться студенты на выпускном , под алкоголем ?',
      answer: 'Оборотнем',
      isActive: true,
      price: 800,
      id_theme: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      question: 'Как называется один студент группы и его мысли о учебе ?',
      answer: 'Писец',
      isActive: true,
      price: 1000,
      id_theme: 5,
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
