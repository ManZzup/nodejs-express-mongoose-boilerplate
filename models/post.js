/**
 * Sample model file for a Post model
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var postSchema = new Schema(
    {
        title: String,
        author: ObjectId
    },
    {
        timestamps: true
    }
);

var Post = mongoose.model('Post', postSchema);