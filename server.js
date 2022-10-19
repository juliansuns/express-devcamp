// 1. Crear el objeto express
const express = require('express')

// 2. Citar las dependencias necesarias para el proyecto
const dotenv = require('dotenv') 
const colors = require('colors')
const listEndpoint = require('express-list-endpoints')
//Los componentes de rutas

const bootcampRoutes =require('./routes/BootcampRoutes')
//3. Establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
console.log(process.env.PORT)

// Crear el objeto de application
// para el servidor de desarrollo

const app = express()

//Rutas del proyecto
app.use('/api/v1/bootcamps', bootcampRoutes)
// endpoint de aplicacion
app.get('/' , (request, response) => {
    response
        .status(200)
        .json({
            "success": true,
            "data" : "request exitosa"
        })
        send('Ruta funcional')
})

//endpoints de dominio
//bootcamps



//Imprimir la lista de endpoints
//validas del proyecto
console.log(listEndpoint(app))


// Ejecutar el servidor de desarrollo
// Parametros:
//  Puerto de escuchar - listen

app.listen(process.env.PORT ,  () => {
    console.log(`Servidor activo en puerto 5000`.yellow)
})