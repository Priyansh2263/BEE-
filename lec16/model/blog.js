const mongoose = require('mongoose');
const { title } = require('process');
const Schema = mongoose.Schema;
const BlogPost = new Schema({
    title: String,
    body: String,
    date: Date
});

mongoose.exports=mongoose.model('Blog', BlogPost);