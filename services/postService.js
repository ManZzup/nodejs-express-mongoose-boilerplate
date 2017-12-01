/**
 * Sample Service, contains the action layer that communicated 
 * between the controller and the model
 */

var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

module.exports = {
    getAllPosts: getAllPosts
}

function getAllPosts(){
    return Post.find({});
}