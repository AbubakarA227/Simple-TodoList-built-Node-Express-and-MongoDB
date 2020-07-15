var express = require('express')
    app = express()
    bodyParser = require('body-parser')
var port
port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

var todoRoutes = require('./routes/todos')

app.get('/', function(req, res){
    res.sendFile("index.html")
})

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT" + port)
})