var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.get('/', function(req,res){
  console.log('app root/ requested');
  return res.status(200).send("hello worlds");
});
app.get('/hi', function(req,res){
  console.log('app hi/ requested');
  return res.status(200).send("hi there programmer");
});
app.get('/helloworld', function(req,res){
  console.log('app helloworld/ requested');
  return res.render("helloworld.html");
});

app.listen(port, function(){
  console.log("Application is running:")
  console.log("Listening on " + port);
});
