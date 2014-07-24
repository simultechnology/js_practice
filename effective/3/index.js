
function averageOfArray(a) {
    "use strict";
    for (var i = 0, sum = 0, n = a.length; i < n; i++) {
        sum += a[i];
    }
    return sum / n;
}

function average() {
    "use strict";
    for (var i = 0, sum = 0, n = arguments.length; i < n; i++) {
        sum += arguments[i];
    }
    return sum / n;
}