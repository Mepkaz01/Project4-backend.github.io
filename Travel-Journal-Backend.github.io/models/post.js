'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    thingsToDo: DataTypes.STRING,
    whereToEat: DataTypes.STRING,
    whereToStay: DataTypes.STRING,
    tips: DataTypes.STRING,
    cost: DataTypes.NUMERIC,
    image: DataTypes.STRING,
    favorite: DataTypes.INTEGER,
    adminId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};