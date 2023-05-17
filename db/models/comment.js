const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Animal }) {
      this.belongsTo(User, { foreignKey: 'userIdComment' });
      this.belongsTo(Animal, { foreignKey: 'animalIdComment' });
    }
  }
  Comment.init({

    animalIdComment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Animals',
      },
    },
    userIdComment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
      },
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
