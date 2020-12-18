'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role_Permissions extends Model {
    
    static associate(models) {
      // define association here
     
    models.Role_Permissions.belongsTo(models.Roles,{
        foreignKey: 'role_id',
    });
    models.Role_Permissions.belongsTo(models.Permissions,{
      foreignKey: 'permission_id',
    });
    }
    
    
  };
  Role_Permissions.init({
    role_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'roles',
          key: 'role_id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
  },
    permission_id:{
      type: DataTypes.INTEGER,
      references: {
          model: 'permissions',
          key: 'permission_id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
  },
  }, {
    sequelize,
    modelName: 'Role_Permissions',
  });
  return Role_Permissions;
};