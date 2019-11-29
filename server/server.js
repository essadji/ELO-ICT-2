const X = require('express');
const APP = X();
const PORT = 2105;
const CORS = require('cors');
const BODY = require('body-parser');
const SQL = require('mysql');
// const BODY = require('body-parser');


let con = SQL.createConnection({
    host: "essadji.com",
    user: "sl001_ict2",
    password: "eloict",
    database: "sl001_ict2"
});

con.connect((err) => {
    if (err) throw err;
    console.log("DB connected");
});
APP.use('/', X.static(__dirname + '/client/'));

APP.listen(PORT, () => {
    console.log(`\r\nNODE ::: I started my backend on port ${PORT}.\r\n`);
});
APP.all('*', function (req, res, next) { //TODO remove before deploy
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    next();
});
APP.get('/query/:arg', CORS(),(req, res, next) => {
    con.query(`SELECT * FROM ${req.params.arg}`, (err, result, fields) => {
        if (err) { next(err); }
        res.send(
            result
        );
    });
})
APP.post('/post/', CORS(),BODY.json(),(req, res, next) => {
    console.dir(req.body)
    res.send("koekoek")
           
})

APP.get('/hello',(req,res)=>{
    res.send("world")
});