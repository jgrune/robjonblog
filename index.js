var Schema = require("./db/schema");
var mongoose = require("mongoose");
var express = require("express");
var parser = require("body-parser")

var app = express();
var Post = Schema.PostModel

app.use(parser.json({extended: true}));


app.use("/assets", express.static("public"));

app.listen(1234, ()=>{
  console.log("app listening on port 1234");
})

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/public/js/ng-views/index.html')
})

app.get("/api/posts", (req,res) => {
  Post.find({}).then((posts) => {
    res.json(posts)
  })
})

app.get("/api/posts/:_id", (req,res) => {
  Post.findOne({_id: req.params._id}, (err, post) => {
    res.json(post);
  })
})

app.put("/api/posts/:_id", (req, res) => {
  Post.findOneAndUpdate({_id: req.params._id}, req.body, {new:true}, (err,post) => {
    res.json(post)
  })
})

app.delete("/api/posts/:_id", (req,res) => {
  Post.findOneAndRemove({_id: req.params._id}, (err, post) => {
    res.json({success: "post deleted"})
  })
})

app.post("/api/posts", function(req, res){
  Post.create(req.body).then(function(post){
    res.json(post)
  })
});
