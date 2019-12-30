const path = require('path')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname,"../client/dist/"))) 

app.get('/', function(req,res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../client/dist/') })
})

app.get('/api', function(req,res) {
  res.send('API Dir!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})