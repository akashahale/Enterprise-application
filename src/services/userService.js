const { successObject } = require('api-rsp');
const db=require('../models');
const sequelize = require('sequelize');
const Users=db.Users;
const Roles=db.Roles;
const User_Roles=db.User_Roles;
const Permissions=db.Permissions;
const Role_Permissions=db.Role_Permissions;

async function getRoleIdbyName(data){
 const result =await Roles.findOne(
     {
        where: { name: data.roles[0].name },
     }
 );
return result;
}

//create user with role
async function createUser(data){
    const roleDetails=await getRoleIdbyName(data);
    const result=await Users.create(
        {
            name:data.name,
            username:data.username,
            emailId:data.emailId,
            enterpriseCode:data.enterpriseCode,
            createdAt: new Date(),
            updatedAt: new Date(),
            User_Roles:[
                {
                    role_id:parseInt(roleDetails.role_id),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ]
        },
        {
            include: {
                model: User_Roles,
            },
        }
    );
    return successObject({ User: result });

}

//list all users
async function listUsers(){
    const result=await Users.findAll({
        include: {
            model: User_Roles,
        },
    });
   
    return successObject({ result: result });
}
//create role with permissions
async function createRole(data){

    const result =await Roles.create({
      name:data.name,
      description:data.description,
      createdAt: new Date(),
      updatedAt: new Date(),
      Role_Permissions:[
        {
            permission_id:parseInt(data.permission_id[0]),
            createdAt: new Date(),
            updatedAt: new Date(),
        }
      ]
    },
    {
        include:{
            model:Role_Permissions,
        },
    } 

    );

    return successObject({ Role: result });
}

//list all roles
async function getRole(){
    const result =await Roles.findAll({
        include:{
            model:Role_Permissions
        },
    })
    return successObject({ Roles: result }); 
}

//update role
async function updateRole(data){
    console.log("data in service :",data);
    const result = await Roles.update(
        {
            name: data.name,
            description: data.description,
            createdAt: new Date(),
            updatedAt: new Date(),
            Role_Permissions:[
                {
                    permission_id:parseInt(data.permission_id[1]),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
              ]

        },
        {
            include:{
                model:Role_Permissions
            },
            where: {
                role_id: data.role_id,
              }
        }
    );
    return successObject({ result: result });

}

//get role by id
async function getRoleById(role_id){
    const result =await Roles.findByPk(role_id,{
        include:{
            model:Role_Permissions
        },
        where:{
            role_id:role_id,
        }
    })
    return successObject({ Roles: result }); 
}
//delete role by id
async function deleteRoleById(role_id){
    console.log("inside del service");
    const result =await Roles.destroy({
        where:{
            role_id:role_id,
        },
        include:[{
            model:Role_Permissions,
        }]
    
     } )
    return successObject({ Roles: result }); 
}
module.exports={createUser,listUsers, createRole,getRole,updateRole,getRoleById,deleteRoleById};