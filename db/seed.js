var mongoose = require("mongoose");
var Schema = require("./schema.js");

var PostModel = Schema.PostModel
var AuthorModel = Schema.AuthorModel

PostModel.remove({}, err => {
  if(err){
    console.log(err)
  }
});

AuthorModel.remove({}, err => {
  if(err){
    console.log(err)
  }
});


var post1 = new PostModel({title: "Title 1", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
var post2 = new PostModel({title: "Title 2", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
var post3 = new PostModel({title: "Title 3", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
var post4 = new PostModel({title: "Title 4", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
var post5 = new PostModel({title: "Title 5", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});


var author1 = new AuthorModel({
  name: "Rob",
  posts: [post1, post3, post5]
})

var author2 = new AuthorModel({
  name: "Bob",
  posts: [post2]
})

var author3 = new AuthorModel({
  name: "James",
  posts: [post4]
})

post1.author = author1
post2.author = author2
post3.author = author3
post4.author = author3
post5.author = author3

var authors = [author1, author2, author3]
var posts = [post1, post2, post3, post4, post5]

for (i of posts){
  i.save((err, i) => {
    if (err){
      console.log(err);
    } else {
      console.log(i);
    }
  })
}

for (i of authors){
  i.save((err, i) => {
    if (err){
      console.log(err);
    } else {
      console.log(i);
    }
  })
}
