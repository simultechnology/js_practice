(function() {

  // Model

  var Task = Backbone.Model.extend({
    defaults: {
      title: 'do something!!',
      completed: false
    },
    validate: function(attrs) {
      if (_.isEmpty(attrs.title)) {
        return "title must not be empty."
      }
    },
    toggle: function() {
      this.set('completed', !this.get('completed'));
    }
  });

  var task1 = new Task({
//    title: 'do it!',
    completed: true
  });

  task1.set('title', 'newTitle');

  //console.log(task1);
  console.log(task1.toJSON());
  task1.toggle();
  console.log(task1.toJSON());
//  task1.toggle();

  task1.set({'title': ''}, {validate: true});
  console.log(task1.toJSON());

})();