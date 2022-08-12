const express = require('express');

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

app.get('/login', (req, res)=>{
    res.send("<h1>Halaman login</h1>");
});

app.get('/mainGame', (req, res)=>{
    res.send("<h1>Halaman Main Game</h1>");
});

// app.listen(3000);
app.listen(3000, ()=>{
    console.log("Application is running at localhost:3000");
});

