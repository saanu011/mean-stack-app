const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const route = require('./routes/route');

const app = express();
//port no.
var port = 3000;

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/naruto');

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database');
});
mongoose.connection.on('err',(err)=>{
    if(err){
        console.log("error in conecting: "+ err);
    }
});

app.use(cors());
app.use(bodyparser.json());

//using static files
app.use(express.static(path.join(__dirname, 'public')));

//using routes
app.use('/api', route);


//listening to port, starting server
app.listen(port, ()=>{
    console.log("Server has been started on port: "+ port);
});
