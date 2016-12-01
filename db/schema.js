var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/robjonblog');

var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
})

db.once('open', function(){
  console.log("Connected to MongoDB");
})

var Schema = mongoose.Schema

var AuthorSchema = new Schema({
  name: String,
})

var PostSchema = new Schema({
  author: [AuthorSchema],
  title: String,
  body: String
})

var PostModel = mongoose.model("Post", PostSchema);
var AuthorModel = mongoose.model("Author", AuthorSchema)

module.exports = {
  PostModel,
  AuthorModel
};
