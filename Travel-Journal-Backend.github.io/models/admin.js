'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Admin.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    about: DataTypes.STRING,
    photo: DataTypes.STRING,
    bucketList1: DataTypes.STRING,
    bucketPhoto1: DataTypes.STRING,
    bucketList2: DataTypes.STRING,
    bucketPhoto2: DataTypes.STRING,
    bucketList3: DataTypes.STRING,
    bucketPhoto3: DataTypes.STRING,
    bucketList4: DataTypes.STRING,
    bucketPhoto4: DataTypes.STRING,
    bucketList5: DataTypes.STRING,
    bucketPhoto5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};