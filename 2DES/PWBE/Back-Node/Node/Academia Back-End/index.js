// Importação
const express = require('express');
const cors  = require('cors');
const mysql = require('mysql');

// Execução da api
const app = express();

// Conexão do banco
const con = mysql.createConnection({
    database: 'Academia',
    host: 'localhost',
    user: 'root'
});

//Iniciador de dependencias
app.use(cors());
app.use(express.json());

//Rota (get)
app.get('/api/', (req, res) => {
    let string = 'select * from alunos'
    con.query(string, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
})


//Rota get por id
app.get('/id/:id', (req, res) => {
    let string = 'select * from alunos where id = ' + req.params.id
    con.query(string, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
})

//Gerenciador da porta da api
app.listen(3000, () => {
    console.log('Rodando na porta 3000');
})