var Post = require('../models/post.js');

var indexController = {
	index: function(req, res) {
        // enter db and look for entries. when returned, ask express
        // to render and pass along the results
        Post.find({}, function (err, results) {
            res.render('index', {
                posts: results
            });
        });
	}
};

module.exports = indexController;