const express = require("express");
const app=express();


const data = [
    {
        id: 123,
        categoria: "Polos",
        producto: "Polo Rambo"
    },
    {
        id: 124,
        categoria: "Polos",
        producto: "Polo Levy"
    }
];


// ##---------------------
// ## Listar Productos
// ## --------------------

app.get('/producto', (req, res)=> {
    res.json({
        data:data
    })
})

// ##---------------------
// ## Guardar Productos
// ##--------------------- 

app.post('/producto', (req, res)=>{
    res.json({
        message: "Guardado"
    })
})

// ##---------------------
// ## Borrar Productos
// ##--------------------- 

app.delete('/producto/:id', (req, res)=>{
    res.json({
        message: "Borrado"
    });
})

// ##------------------------
// ## Actualizar Productos
// ##------------------------ 

app.put('/producto/:id', (req, res)=>{
    res.json({
        message: "Actualizado"
    });
})


module.exports = app;



