const express = require('express');
const fs = require('fs')

const path = require('path');
const app = express();

app.use('/css', express.static(__dirname+'/css'))
app.use('/js', express.static(__dirname+'/js'))
app.use('/assets', express.static(__dirname+'/assets'))


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/landingPage.html'))
});

app.get('/home', (req, res)=>{
    res.send("<h1>Halaman Home</h1>");
});

app.get('/mainGame', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/mainGame.html'))
});

app.get('/login', (req, res)=>{
    res.send("<h1>Halaman login</h1>");
});

app.get('/user', (req,res)=>{
    let query = JSON.stringify(req.query) ;
    let data = JSON.parse(fs.readFileSync('./userAccount.json', 'utf-8'));
    if (query === '{}'){
        res.send(data);
    }else{
        let queryName = (req.query.name || "").toLowerCase();
        let queryEmail = (req.query.email || "").toLowerCase();
        let filteredData = []

        for(let i=0; i < data.length; i++){
            if(data[i].name.toLowerCase().includes(queryName) && data[i].email.toLowerCase().includes(queryEmail)){
                filteredData.push(data[i]);
            }
        }
        if(filteredData.length != 0){
            res.send(filteredData);
        }else{
            res.status(404).send("DATA NOT FOUND");
        }
    }
});

app.get('/user/:id', function (req,res){
    let result 
    let data = JSON.parse(fs.readFileSync('./userAccount.json', 'utf-8'));

    for(let i=0; i < data.length; i++){
        if(data[i].id == parseInt(req.params.id)){
            result = data[i];
        }
    }
    if(result != undefined){
        res.send(result);
    }else{
        res.status(404).send("DATA NOT FOUND");
    }
});

app.listen(3000, ()=>{
    console.log("Application is running at localhost:3000");
});

