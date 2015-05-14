// api controller used for ajax requests

// access to data base
var Post = require('../models/post.js');

var apiController = {
    addPost: function(req, res) {
        var newPost = new Post(req.body);
        newPost.save(function (err, results) {
            res.send(results);
        });
    },

    upvote: function (req, res) {
        var postId = req.params.postId;

        Post.findByIdAndUpdate(postId, {$inc: {score: 1}}, {new: true}, function (err, results) {
            res.send(results);
        });
    }
};

module.exports = apiController;