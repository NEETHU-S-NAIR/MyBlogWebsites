const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://neethuS115:sureshN115@cluster0.k7axd0h.mongodb.net/Blogs?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewBloggerSchema = new Schema({
    bloggerId : Number,
    bloggerName : String,
    imageUrl : String,
    blogTitle : String,
    blogDate : String,
    blogContent : String
})

var Blogger = mongoose.model('Blogger',NewBloggerSchema); //UserData is the model and NewBookData is the schema

module.exports = Blogger;

