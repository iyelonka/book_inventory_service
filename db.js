var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/booksdb';

var connection = MongoClient.connect({
    host     : 'localhost:27017',
    user     : 'mongodb',
    password : '',
    database : 'booksdb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;