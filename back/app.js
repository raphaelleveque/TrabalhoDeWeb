const express = require("express");
const cors = require("cors");
const mysql = require('mysql');

const app = express();
app.use(cors());

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Banco ok!");
});


app.post('/', (req,res) => {

    

    var xx = req.body
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Server rodando')
});
