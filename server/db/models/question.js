const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      // define association here
      Question.belongsTo(Theme, { foreignKey: 'id_theme' });
    }
  }
  Question.init({
    question: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    id_theme: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },

    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
