var repo = require('./repository');
var app = require('./app')(repo); //server potrzebuje produkcyjnego repo
var port = process.env.PORT || 3000;

// tutaj dopiero odpala sie apka - powyzej mamy tylko deklaracje
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
