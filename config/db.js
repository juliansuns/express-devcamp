const sequelize = require('./seq')
const colors = require('colors')


//Definir la funcion de conexion a  la base de datos

const connectDB = async ()=>{
    try {
        //conectarse a la db
        await sequelize.authenticate()
        console.log(`Conectado a MYSQL`.yellow)
    } catch (error) {
        console.log(error)
    }
}
 module.exports = connectDB