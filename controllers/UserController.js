//Dependencias:
//El objeto de conexion:
const sequelize = require('../config/seq')

//Datatypes de sequelize
const { DataTypes } = require('sequelize')

//El modelo
const UserModel = require('../models/user')

//Crear la entidad 
const User = UserModel(sequelize, DataTypes)

//Listar los users
exports.getAllUsers = async (req, res)=>{ 
    //Traer los user
    const users = await User.findAll();

    res
        .status(200)
        .json({
            "success": true,
            "data":users
        })
}

//Listar users por ID
exports.getSingleUser =  async (req, res)=>{
    //console.log(req.params.id)
    const singleUser = await User.findByPk(req.params.id);
    
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

//Actualizar users por ID
exports.updateUser = async (req, res)=>{
    // Change everyone without a last name to "Doe"
    await User.update( req.body , {
        where: {
            id: req.params.id
        }
    });
    const singleUser = await User.findByPk(req.params.id)
    //console.log(req.params.id)
    res
        .status(200)
        .json({
           "success": true,
           "data": singleUser
    })
}

//Eliminar users por ID
exports.deleteUser = async (req, res)=>{
    const singleUser = await User.findByPk(req.params.id)
    await User.destroy({
        where: {
            id:req.params.id
        }
    });
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}
//Crear nuevo users
exports.createUser = async (req, res)=>{
    const newUser = await User.create(req.body)
    res
        .status(200)
        .json({
            "success": true,
            "data": newUser
        })
}