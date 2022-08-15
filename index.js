const express = require('express');
const fs = require('fs')
const bodyParser = require('body-parser')

const path = require('path');
const app = express();

app.use('/css', express.static(__dirname+'/css'))
app.use('/js', express.static(__dirname+'/js'))
app.use('/assets', express.static(__dirname+'/assets'))


app.get('/', (req, res)=>{
    // res.send("<h1>Halaman Landing Page</h1>");
    res.sendFile(path.join(__dirname + '/views/landingPage.html'))
});

app.get('/home', (req, res)=>{
    res.send("<h1>Halaman Home</h1>");
});

app.get('/mainGame', (req, res)=>{
    // res.send("<h1>Halaman Main Game</h1>");
    res.sendFile(path.join(__dirname + '/views/mainGame.html'))
});

app.get('/login', (req, res)=>{
    res.send("<h1>Halaman login</h1>");
});

app.get('/user', (req,res)=>{
    let query = JSON.stringify(req.query) ;
    // console.log(queryName);
    if (query === '{}'){
        let data = JSON.parse(fs.readFileSync('./userAccount.json', 'utf-8'));
        res.send(data);
    }else{
        let queryName = req.query.name;
        let queryemail = req.query.email;

        let data = JSON.parse(fs.readFileSync('./userAccount.json', 'utf-8'));
        // console.log(queryName)
        res.send(data);
        // res.status(404).send('DATA NOT FOUND');
    }
});

// app.listen(3000);
app.listen(3000, ()=>{
    console.log("Application is running at localhost:3000");
});

