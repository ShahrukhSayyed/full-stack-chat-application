
// calling the module 
var express = require('express');

//creating an instance 
var app = express();

// we have to include events module - core nodejs 
var events = require('events');

// you have create an instance of event emitter
var eventEmitter = new events.EventEmitter();


// event listener
//we are waiting for the event to happen
eventEmitter.on('welcomeEmail', function (data) {
    //console.log("event has been emitted.now performing its function");
    //console.log(data.message);
    console.log("first listener was called");
    console.log("code to send welcome email will be written here");

});




// a basic route
app.get('/signup', function (req, res) {

    // create a user 
    //save it 

    //send him a welcome email using event 

    var user = { name: 'Aditya', email: 'aditya@edwisor.com' };

    // this is how event is emitted.
    setTimeout(() => {

        eventEmitter.emit('welcomeEmail', user);
        
    }, 2000);
   

    // simple response
    console.log("sending response")
    res.send('Hello World!');

});


//listening on a port 
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});