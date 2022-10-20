const mongoose = require('mongoose')

//Modelo de bootcamps
const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[
            true,
            "Por Favor, ingrese nombre"
        ],
        unique: true,
        maxlength:[
            30,
            "NO se admiten bootcamps > 30"
        ]
    },
    description:{
        type:String,
        required:[
            true,
            'Por favor, INgrese descripcion'
        ],
        maxlength:[
            500,
            "No se admiten descripciones > 500"
        ]

    },
    phone:{
        type:String,
        required:[
            true,
            'Por favor, Ingrese un telefono'
        ],
        maxlength:[
            20,
            "No se admiten telefonos mayores a 20"
        ]
        
    },
    email:{
        type:String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Por favor, Ingrese email valido'
        ],        
    },
    averageCost:Number,
    averageRating:{
        type:Number,
        min:[1, 'Calificación minima: 1'],
        max:[10, 'Calificación Maxima: 10']
    }
})

module.exports = mongoose.model('bootcamp', BootcampsSchema)