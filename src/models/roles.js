'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User_Roles, {
          foreignKey: 'role_id',
      }
      );
      this.hasMany(models.Role_Permissions, {
        foreignKey: 'role_id',
    });
    }
  };
  Roles.init({
    role_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    permisionsId:{
      type:DataTypes.ENUM,
      values:['1','2','3']
    } 
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};