
// calling the module 
var express = require('express');

//creating an instance 
var app = express();

var events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.on('someEvent',function(data){
	console.log(data);
	
});

eventEmitter.on('someEvent',function(data){
	console.log("I am the second listener");
	
});

eventEmitter.on('someEvent',function(data){
	console.log("I am the third listener");
	
});

eventEmitter.on('someEvent',function(data){
	console.log("I am the fourth listener");
	
});



// a basic route
app.get('/', function (req, res) {
    var someData = {'message':'hello world was called'}
    
    setTimeout(() => {

        eventEmitter.emit('someEvent',someData);
        
    }, 2000);
   
	
  	res.send('Hello World!');

});


//listening on a port 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});