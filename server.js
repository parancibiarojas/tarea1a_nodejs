const express = require("express");
const app=express();

app.use( require('./rutas') )

app.listen(8080, ()=>{
    console.log("Servidor ok 8080");

})
