const express = require("express");
const cors = require("cors");
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json())

var db = mysql.createConnection({
    host: "localhost",
    user: "webClient",
    password: "Senh@123",
    database: "web"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Banco conectado");
});

app.post('/login', (req,res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).send('Email e senha são obrigatórios');
    }

    db.query("CALL CadastraUser(?, ?)", [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao executar a procedure:', err);
            return res.status(500).send('Erro ao executar a procedure');
        }

        const token = results[0][0].token;
        if (!token) {
            return res.status(401).send('Credenciais inválidas');
        }

        res.status(200).json({ access_token: token });
    });
});

app.get('/login', (req, res) => {
    const { email, senha } = req.query;

    if (!email || !senha) {
        return res.status(400).send('Email e senha são obrigatórios');
    }

    db.query("CALL LogarUser(?, ?)", [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao executar a procedure:', err);
            return res.status(500).send('Erro ao executar a procedure');
        }

        const token = results[0][0].token;
        if (!token) {
            return res.status(401).send('Credenciais inválidas');
        }


        res.json({ access_token: token });
    });
});

app.post('/postagens', validarToken, (req, res) => {
    const { titulo, body, author, img } = req.body;

    if (!titulo || !body || !author) {
        return res.status(400).send('Título, corpo e autor são obrigatórios');
    }

    const query = 'INSERT INTO posts (titulo, body, author, img) VALUES (?, ?, ?, ?)';
    const values = [titulo, body, author, img];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Erro ao inserir o post:', err);
            return res.status(500).send('Erro ao inserir o post');
        }

        res.status(201);
    });
});

app.get('/postagens', (req,res) => {

    db.query(`SELECT * FROM posts`, (err, result) => {
        if (err) {
            console.error('Erro ao executar a procedure:', err)
            return res.status(500).send('Erro ao executar a procedure')
        }
        res.status(200).json(result)
    })
});


app.listen(3000, () => {
    console.log('Server rodando')
});


function validarToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('Token de acesso é necessário');
    }

    db.query("SELECT email FROM login WHERE access_token = ?", [token], (err, results) => {
        if (err) {
            console.error('Erro ao validar o token:', err);
            return res.status(500).send('Erro ao validar o token');
        }

        if (results.length === 0) {
            return res.status(401).send('Token inválido');
        }

        next();
    });
}