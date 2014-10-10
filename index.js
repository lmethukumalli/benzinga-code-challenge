/*var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World123!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})*/


var http = require('http');
var fs = require('fs');

fs.readFile('homepage.php', function (err, html) {
    /*if (err) {
        throw err;
    }*/
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8888, '127.0.0.1');
});
console.log('Server running at http://127.0.0.1:8888');
