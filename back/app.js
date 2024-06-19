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

app.post('/executar-procedure', (req, res) => {
    const nomeProcedure = 'minha_procedure';
    const parametro1 = req.query.parametro1;
    const parametro2 = req.query.parametro2;

    db.query(CALL CriarUsuario(?, ?), [parametro1, parametro2], (err, result) => {
        if (err) {
            console.error('Erro ao executar a procedure:', err);
            return res.status(500).send('Erro ao executar a procedure');
        }
        res.json(result);
    });
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

app.listen(3000, () => {
    console.log('Server rodando')
});
