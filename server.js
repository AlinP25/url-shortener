var path = require("path");
var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'), function (err) {
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("File sent: " + path.join(__dirname + '/index.html'));
        }
    })
});

app.listen(process.env.PORT || 8080);

console.log("Server is up and running...");
