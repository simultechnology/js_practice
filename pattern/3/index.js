var Person = function (name) {
    this.first_name = name;
    this.say = function () {
        return 'I am ' + this.first_name;
    };
};

function Student(name) {
    this.first_name = name;
    this.say = function () {
        return 'I am ' + this.first_name;
    };
}

