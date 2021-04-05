const express = require("express");
const app=express();


const data = [
    {
        id: 123,
        producto: "user1"
    },
    {
        id: 124,
        producto: "user2"
    }
];


// ##---------------------
// ## Listar Usuarios
// ## --------------------

app.get('/usuarios', (req, res)=> {
    res.json({
        data:data
    })
})

// ##---------------------
// ## Guardar Usuarios
// ##--------------------- 

app.post('/usuarios', (req, res)=>{
    res.json({
        message: "Guardado"
    })
})

// ##---------------------
// ## Borrar Usuarios
// ##--------------------- 

app.delete('/usuarios/:id', (req, res)=>{
    res.json({
        message: "Borrado"
    });
})

// ##------------------------
// ## Actualizar Usuarios
// ##------------------------ 

app.put('/usuarios/:id', (req, res)=>{
    res.json({
        message: "Actualizado"
    });
})


module.exports = app;



