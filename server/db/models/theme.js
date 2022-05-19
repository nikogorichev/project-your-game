const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      // define association here
      Theme.hasMany(Question, { foreignKey: 'id_theme' });
    }
  }
  Theme.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
