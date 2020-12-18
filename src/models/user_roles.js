'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User_Roles.belongsTo(models.Users, {
        foreignKey: 'user_id',
    });
    models.User_Roles.belongsTo(models.Roles, {
        foreignKey: 'role_id',
    });
    }
  };
  User_Roles.init({
    user_id:{
      type: DataTypes.INTEGER,
      references: {
          model: 'users',
          key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
  },
    role_id:{
      type: DataTypes.INTEGER,
      references: {
          model: 'roles',
          key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
  },
  }, {
    sequelize,
    modelName: 'User_Roles',
  });
  return User_Roles;
};