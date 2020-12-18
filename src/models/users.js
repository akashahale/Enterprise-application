'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User_Roles, {
        foreignKey: 'user_id',
    });
    }
  };
  Users.init({
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
  },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    emailId: DataTypes.STRING,
    enterpriseCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};