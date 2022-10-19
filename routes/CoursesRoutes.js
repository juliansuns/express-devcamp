const express = require('express')

//Definir objeto de ruteo
const router = express.Router()

//Listar los Courses
router.get('/', (req, res)=>{ 
    res
        .status(200)
        .json({
            "success": true,
            "data": 'Aqui va a mostrar todos los Courses'
        })
})

//Listar Course por ID
router.get('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a salir el Courses cuyo ID es ${req.params.id}`
        })
})

//Actualizar Course por ID
router.put('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a actualizarse el Courses cuyo ID es ${req.params.id}`
        })
})

//Eliminar Course por ID
router.delete('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui se va a eliminar el Course de ID ${req.params.id}`
        })
})
//Crear nuevo Courses
router.post('/', (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui se va a crear los Courses"
        })
})

module.exports = router