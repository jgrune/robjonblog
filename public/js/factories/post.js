angular.module("rjb")
  .factory("Post", ["$resource", Callback])


function Callback($resource){
  return $resource("/api/posts/:_id", {}, {
      update: { method: "PUT"}
  })
}
