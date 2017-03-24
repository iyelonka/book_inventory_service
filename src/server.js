var repo = require('./repository');
var app = require('./app')(repo); //server potrzebuje produkcyjnego repo

// tutaj dopiero odpala sie apka - powyzej mamy tylko deklaracje
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
