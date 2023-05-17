const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Animal }) {
      this.belongsTo(User, { foreignKey: 'userIdLike' });
      this.belongsTo(Animal, { foreignKey: 'animalIdLike' });
    }
  }
  Like.init({
    animalIdLike: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Animals',
      },
    },
    userIdLike: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
      },
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
