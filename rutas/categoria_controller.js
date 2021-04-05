const express = require("express");
const app=express();


const data = [
    {
        id: 123,
        nombre: "Polos"
    },
    {
        id: 124,
        nombre: "Pantalones"
    }
];


// ##---------------------
// ## Listar Categorias 
// ## --------------------

app.get('/categoria', (req, res)=> {
    res.json({
        data:data
    })
})

// ##---------------------
// ## Guardar Categoria
// ##--------------------- 

app.post('/categoria', (req, res)=>{
    res.json({
        message: "Guardado"
    })
})

// ##---------------------
// ## Borrar Categoria
// ##--------------------- 

app.delete('/categoria/:id', (req, res)=>{
    res.json({
        message: "Borrado"
    });
})

// ##------------------------
// ## Actualizar Categoria
// ##------------------------ 

app.put('/categoria/:id', (req, res)=>{
    res.json({
        message: "Actualizado"
    });
})

module.exports = app;



