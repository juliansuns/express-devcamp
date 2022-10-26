const mongoose = require('mongoose')
const colors = require('colors')

//const uri = 'mongodb+srv://juliancho:Sunsjulian2004@cluster0.kmeknla.mongodb.net/bootcamps?retryWrites=true&w=majority'
const uri = 'mongodb://localhost:27017/bootcamps'
//componente de conexion a BD
//Tipos :funcional

const connectDB = async() =>{
    const conn = await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Conectado: ${conn.connection.host}`.blue)
}

connectDB()