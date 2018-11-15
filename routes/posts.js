var express = require('express');
var router = express.Router(); 
var mongoose = require('mongoose');
var Post = mongoose.model('Post');


router.get('/postlist', function(req, res) {
  Post.find({}, function(err, posts) {
    if (err)
      res.send(err);
    res.json(posts);
  });
});
/*
router.post('/createpost', function(req, res) {
  var new_post = new Post(req.body);
  new_post.save(function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
});
*/

module.exports = router;