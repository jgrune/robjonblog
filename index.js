var Schema = require("./db/schema");
var Post = Schema.PostModel

var mongoose = require("mongoose");
var express = require("express");
var app = express();

app.set("view engine", "hbs");

app.listen(1234, ()=>{
  console.log("app listening on port 1234");
})

app.get("/", (req,res) => {
  Post.find({}, (err, posts) => {
    res.json(posts);
  });
})

app.get("/:post", (req,res) => {
  Post.findOne({title: "Title 1"}, (err, post) => {
    res.json(post);
  })
})

app.put("/:post", (req,res) => {
  Post.findOneAndUpdate({title: `Title ${req.params.post}`}, {title: "XYZafiajw;"}, {new: true}, (err, post) => {
    res.json(post);
  })
})

app.delete("/:post", (req,res) => {
  Post.findOneAndRemove({title: `Title ${req.params.post}`}, (err, post) => {
    res.send("post deleted")
  })
})

app.post("/", (req, res) => {
  var post4 = new Post({title: "Title 99", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
  post4.save((err, i) => {
    if (err){
      console.log(err);
    } else {
      res.json(i);
    }
  })
})
