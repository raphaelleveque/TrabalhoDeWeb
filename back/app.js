const express = require("express");
const cors = require("cors");
const mysql = require('mysql');

const app = express();
app.use(cors());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Banco ok!");
});


app.post('/', (req,res) => {

    

    var xx = req.body
    res.send('Hello world');
});

app.post('/CriaUsuario', (req,res) => {
    var email, senha = req.body

    db.query("CALL CriarUsuario(?, ?)", [senha, email], (err, result) => {
        if (err) {
            console.error('Erro ao executar a procedure:', err)
            return res.status(500).send('Erro ao executar a procedure')
        }
        res.json(result)
    })
});

app.post('/login', (req,res) => {
    var email, senha = req.body

    db.query("CALL LoginUsuario(?, ?)", [senha, email], (err, result) => {
        if (err) {
            console.error('Erro ao executar a procedure:', err)
            return res.status(500).send('Erro ao executar a procedure')
        }
        res.json(result)
    })
});


app.post('/criaPostagem', (req,res) => {
    var titulo, body, author, horario, img  = req.body

    db.query(`INSERT INTO posts (?, ?, ?, ?) VALUES`, [titulo, body, author, horario, img], (err, result) => {
        if (err) {
            console.error('Erro ao executar a procedure:', err)
            return res.status(500).send('Erro ao executar a procedure')
        }
        res.json(result)
    })
});

app.get('/postagens', (req,res) => {

    db.query(`SELECT TOP 15 * FROM posts `, (err, result) => {
        if (err) {
            console.error('Erro ao executar a procedure:', err)
            return res.status(500).send('Erro ao executar a procedure')
        }
        res.json(result)
    })
});


app.listen(3000, () => {
    console.log('Server rodando')
});
