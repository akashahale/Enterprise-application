const userService=require('../services/userService');
const { sendSuccessRsp, sendErrorRsp, successObject } = require('api-rsp');

//create user with role
async function createUser(req,res){

    try{
        const result=await userService.createUser(req.body);
        return sendSuccessRsp(res,result);
    }catch(err){
        res.status(500).send(err.stack);
    }
}

//list all users
async function listUsers(req, res) {
    try {
        const result = await userService.listUsers();
        return sendSuccessRsp(res, result);
        } catch (err) {
           console.error('Error in get Users :: ', err);
           return sendErrorRsp(res, {
           code: 'List_User_FAILED',
           message: 'Unable to list users',
           httpCode: 500,
        });
    }
}

//create role with permissions
async function createRole(req,res){
    try{
        const result=await userService.createRole(req.body);
        return sendSuccessRsp(res,result);
    }catch(err){
        res.status(500).send(err.stack);
    }
}

//list roles
async function getRoles(req, res) {
    try {
        const result = await userService.getRole();
        return sendSuccessRsp(res, result);
        } catch (err) {
           return sendErrorRsp(res, {
           code: 'Get_Role_FAILED',
           message: 'Unable to get roles',
           httpCode: 500,
        });
    }
}
//update role
async function updateRole(req, res) {
    try {
        console.log("id in conn is ",req.body);
        const result = await userService.updateRole(req.body);
        return sendSuccessRsp(res, result);
        } catch (err) {
           return sendErrorRsp(res, {
           code: 'Get_Role_FAILED',
           message: 'Unable to get roles',
           httpCode: 500,
        });
    }
}

//get role by id
async function getRoleById(req,res){
    try {
       
        console.log("inside get id",req.params.role_id);
        const result = await userService.getRoleById(req.params.role_id);
        return sendSuccessRsp(res, result);
        } catch (err) {
           return sendErrorRsp(res, {
           code: 'Get_Role_FAILED',
           message: 'Unable to get roles',
           httpCode: 500,
        });
    }
}
async function deleteRoleById(req,res){
    try {
       console.log("inside delete id",req.params.role_id);
        const result = await userService.deleteRoleById(req.params.role_id);
        return sendSuccessRsp(res, result);
        } catch (err) {
           return sendErrorRsp(res, {
           code: 'Get_Role_FAILED',
           message: 'Unable to get roles',
           httpCode: 500,
        });
    }
}
module.exports={createUser,listUsers,createRole,getRoles,updateRole,getRoleById,deleteRoleById};