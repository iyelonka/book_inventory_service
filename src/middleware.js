module.exports = {
    logRequest (req, res, next) {
        console.log('incoming request at ', new Date());
        next();
    },
    auth (req, res, next) {
        console.log('you can pass my auth');
        next();
    }
};

// mozemy tak napisac bo najnowszy node wykorzystuje ES6
// w innym przypadku bysmy napisali
// logRequest: function(req, res, next) {...}