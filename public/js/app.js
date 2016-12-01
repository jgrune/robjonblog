let app = angular.module("rjb", ["ui.router", "ngResource"])

app.config(["$stateProvider", RouterFunction])

app.controller("indexController", ["$state", "Post", indexControllerFunction])

app.controller("showController", ["$state", "Post", "$stateParams", showControllerFunction])



function RouterFunction($stateProvider){
  $stateProvider
    .state("index", {
      url: "/posts",
      templateUrl: "/assets/js/ng-views/posts.html",
      controller: "indexController",
      controllerAs: "vm"
    })
    .state("showAll", {
      url: "/posts/all",
      templateUrl:
      "/assets/js/ng-views/showall.html",
      controller: "indexController",
      controllerAs: "vm"
    })
    .state("show", {
      url: "/posts/:_id",
      templateUrl: "/assets/js/ng-views/show.html",
      controller: "showController",
      controllerAs: "vm"
    })
}

function indexControllerFunction($state, Post){
  this.posts = Post.query()
  this.newPost = new Post()
  this.create = function(){
    this.newPost.$save().then((post) => {
      $state.go("show", { _id: post._id})
    })
  }
}

function showControllerFunction($state, Post, $stateParams) {
  this.post = Post.get({_id: $stateParams._id})
  console.log("test")
  console.log(this.post)
  this.update = function () {
    this.post.$update({_id: $stateParams._id})
    $state.go("index")
  }
  this.destroy = () => {
    this.post.$delete({_id: $stateParams._id}).then((data) => {
      // console.log(data)
      $state.go("index")
    })
  }
}
