var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

//middleware / routing
app.set('view engine', 'pug'); // testing out pug templating on the search page
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/hello', function(req, res) {
  var name = 'Evan';
  res.send(`<h1>Welcome to ${name}'s website</h1>
            <p> This is a test website using the express framework</p>`
    );
});

app.get('/search', function(req, res) {
  res.render('form_with_post');
})

// creates server for us, callback runs once server is up and running
app.listen(port, function() { 
  console.log(`This app is listening on port ${port}!`);
});
