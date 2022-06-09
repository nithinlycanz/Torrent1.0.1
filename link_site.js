

import express from "express";
const app = express();
//const lib = require("./torrent");
import { plusSlides } from './torrent.js';

//import * as path from 'path';
//const path = require('path');
const router = express.Router();
import path from 'path';
const _dirname = path.resolve();
//var bodyParser = require('body-parser')
import bodyParser from "body-parser";
var urlencodedParser = bodyParser.urlencoded({extended: false});


router.get('/',function(req,res){
  res.sendFile(path.join(_dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(_dirname +'/index.html'));
});

router.get('/post',function(req,res){
    res.sendFile(path.join(_dirname +'/index.html'));
  });

router.post('/post', urlencodedParser, function(req,res){
  console.log(req.body);
  //var myText = req.body.url; //mytext is the name of your input box
  //res.send('Your Text:' +myText); 
  plusSlides(req.body.url);
  //res.render('post', {qs: req.query});
 //res.redirect("/");
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at Port 3000');


//"start": "react-scripts start",
//"test": "react-scripts test",

//.............................................................

// import express from "express";
// const app = express();

// app.post("/post", (req, res) => {
// console.log("Connected to React");
// res.redirect("/");
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, console.log(`Server started on port ${PORT}`));
