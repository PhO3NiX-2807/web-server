var express= require('express');
var app= express();
var middleware = require('./middleware.js')

app.use(middleware.logger);


app.get('/about',middleware.requireAuthentication, function(req,res){
    res.send('About Me');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);