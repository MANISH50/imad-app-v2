/*
We had imported something software pacakges.
*/
var express = require('express'); //Library which is used to create the  web server.
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/myarc',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'myarc.html'));
});
app.get('/myarc1',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'myarc1.html'));
});
app.get('/other',function(res,req){
   res.sendFile(path.join(_dirname,'ui','myarc1.html')); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
