function greeting(something) {
  console.log('hello, ' + something + '!');
}

exports = module.exports = greeting;

if (require.main === module) {
  greeting('world');
}