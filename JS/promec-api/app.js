const express = require('express');

const app = express();

const db = require("./db/models/index")


const home = require("./controllers/home");
const users = require("./controllers/users");
const contatos = require("./controllers/contatos");


app.use('/home', home);
app.use('/users', users);
app.use('/contatos', contatos);

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});