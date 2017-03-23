//Code by Victor Lia Fook
var http = require('http');
var path = require('path');
var fibonacci = require('./fibonacci');
var string = require('./string-utils');
var geometry = require('./geom');

const token = "a-token";

var express = require('express');

var app = express();
var router = express.Router();


app.use('/api', router);

router.get('/Token', function(req, res){
  res.json(token);
});


router.route('/Fibonacci')
  .get(onlyIntQuery, function(req, res){
    var n = req.query.n;
    var factor = 1;
    
    if(Math.abs(n) >= 93){
      res.send(400);
      return;
    }
    if(n < 0)
      factor = Math.pow(-1, n-1);
    var ret = "" + factor * fibonacci.recursive(parseInt(Math.abs(n)));
    res.json(ret);
  });
  
router.route('/ReverseWords')
  .get(function(req, res){
    
    var ret = "";
    var sentenceArr = req.query.sentence.trim().split(/\s+/);
    var sArr = req.query.sentence.split(/[\w?¿!@:⸮áéíóúâêîôûäëïöü]+/);
   
    for(var i = 0; i < sArr.length; i++){
        ret += sArr[i];
        ret += (sentenceArr[i]) ? string.reverse(sentenceArr[i]) : '';
        
    }
    res.json(ret);
  });
  
router.route('/TriangleType')
  .get(onlyIntQuery, function(req, res){
    
    var ret = geometry.triangleType(req.query.a, req.query.b, req.query.c);
    res.json(ret);
  });

app.listen(process.env.PORT || 3000, function(){
  
  console.log("Server listening at port 3000");
  console.log(__dirname);
});


function onlyIntQuery(req, res, next){
  for(var item in req.query){
    if(isNaN(parseInt(req.query[item]))){
      res.status(400).json({ message: 'The request is invalid.' });
      return;
    }
  }
  next();
}
