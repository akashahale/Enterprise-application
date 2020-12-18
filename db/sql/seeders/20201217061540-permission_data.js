'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('permissions',
    [
        {
            name:'user_add',
            description:'add user',
            feature:'reporting',
            status:'A',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          name:'user_update',
          description:'update user details',
          feature:'reporting',
          status:'A',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        name:'user_fetch',
        description:'fetch user details',
        feature:'completed',
        status:'A',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      name: 'role_add',
      description:'Add role to user',
      feature:'full_access',
      status:'A',
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    name: 'role_update',
    description:'update role of user',
    feature:'full_access',
    status:'A',
    createdAt: new Date(),
    updatedAt: new Date(),
},

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('permissions', null, {});
  }
};
