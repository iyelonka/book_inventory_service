module.exports = function (repo) {
    return {
        init: function (req, res) {
            res.send('Let\'s start the game!');
        },

        stockUp: function (req, res, next) {
            var isbn = req.body.isbn;
            var count = req.body.count;

            repo
                .stockUp(isbn, count)
                .then(function(){
                    res.json({
                        isbn: req.body.isbn,
                        count: req.body.count
                    });
                })
                .catch(next);
        },

        findAll: function (req, res, next) {
            repo
                .findAll()
                .then(function(results) {
                    res.json(results);
                })
                .catch(next);
        },

        getCount: function (req, res, next) {
            repo.
                getCount(req.params.isbn).
                then(function (result) {
                    if (result) {
                        res.json({count: result});
                    } else {
                        res.status(404).send('No book with isbn ' + req.params.isbn);
                    }
                }).
                catch(next);
        }
    };
};

