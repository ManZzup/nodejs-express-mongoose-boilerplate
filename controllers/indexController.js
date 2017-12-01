/**
 * Sample Controller : controller is defined for the page action
 *                      rather than the model
 */

var postService = require('../services/postService');

module.exports = {
    showPosts: showPosts
}

/**
 * Calls the postService to retrieve all posts
 */
function showPosts(req, res){
    postService.getAllPosts().then((err, posts) => {
        if(!err){
            return res.send(posts);
        }else{
            return res.send({});
        }
    }).catch((err) => {
        return res.send({});
    })
}