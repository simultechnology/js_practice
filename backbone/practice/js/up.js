(function() {

  // Model

  var Task = Backbone.Model.extend({
    defaults: {
      title: 'do something!!',
      completed: false
    }
  });

  var task1 = new Task({
//    title: 'do it!',
    completed: true
  });

  console.log(task1);
  console.log(task1.toJSON());

})();