let app = angular.module("rjb", ["ui.router", "ngResource"])

app.config(["$stateProvider", RouterFunction])

function RouterFunction($stateProvider){
  $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "views/index.hbs"
    })
}
