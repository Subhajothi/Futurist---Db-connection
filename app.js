  var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/db-basecode";
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(url);
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });

        
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db-basecode");
  dbo.collection("users").findone({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



app.listen(port, () => {
    console.log("Server listening on port " + port);
});


