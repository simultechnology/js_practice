myapp = {};

myapp.Greeter = function() { };

myapp.Greeter.prototype.greet = function(name) {
  if (name) {
    return "Hello " + name + "!";
  } else {
    return null;
  }
};
