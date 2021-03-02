var express= require('express');
var app= express();

middleware = {
    requireAuthentication : function(req,res,next){
        console.log('Private Route Hit');
        next();
    },
    logger: function(req,res,next){
        console.log('Request:'+ new Date().toString() + ' ' +  req.method + ' ' + req.originalUrl  );
        next();
    }
};
app.use(middleware.logger);


app.get('/about',middleware.requireAuthentication, function(req,res){
    res.send('About Me!');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);