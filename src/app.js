var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(repo){
    var app = express();
    var middleware = require('./middleware');
    var routes = require('./routes')(repo);
    var errors = require('./errors');

    // middleware - cross cutting concerns
    app.use(middleware.logRequest);
    app.use(middleware.auth);
    app.use(bodyParser.json());

    // handler/routes
    app.get('/', routes.init);
    app.post('/stock', routes.stockUp);
    app.get('/stock', routes.findAll);
    app.get('/stock/:isbn', routes.getCount);

    // error handling
    app.use(errors.clientError);
    app.use(errors.serverError);

    return app;
};