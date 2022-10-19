const express = require('express')

//Definir objeto de ruteo
const router = express.Router()

//Listar los bootcamps
router.get('/', (req, res)=>{ 
    res
        .status(200)
        .json({
            "success": true,
            "data": 'Aqui va a mostrar todos los bootcmaps'
        })
})

//Listar bootcamps por ID
router.get('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a salir el bootcamp cuyo ID es ${req.params.id}`
        })
})

//Actualizar bootcamps por ID
router.put('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a actualizarse el bootcamp cuyo ID es ${req.params.id}`
        })
})

//Eliminar bootcamps por ID
router.delete('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui se va a eliminar el bootcamp de ID ${req.params.id}`
        })
})
//Crear nuevo bootcamp
router.post('/', (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui se va a crear los bootcamps"
        })
})

module.exports = router