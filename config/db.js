const sequelize = require('./seq')
const colors = require('colors')
const {DataTypes} = require('sequelize')

// Crear instancia de el modelon User
const UserModel = require('../models/user')
const User =  UserModel(sequelize, DataTypes)
//Definir la funcion de conexion a  la base de datos

const connectDB = async ()=>{
    try {
        //conectarse a la db
        await sequelize.authenticate()
        console.log(`Conectado a MYSQL`.yellow)
        const jane = await User.create({
            username:"Valeria",
            email: "valeria@gmail.com",
            password: "123456"
        });
        console.log("Jane's auto-generated ID:",jane.id);
    } catch (error) {
        console.log(error)
    }
}
connectDB()