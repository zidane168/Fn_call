function logger() {
    
    Array.prototype.forEach.call(arguments, function(item) {
        console.log(item);
    });

    Array.prototype.forEach.call(arguments, item => console.log(item));
}

function logger2() {

    // convert arguments to Array
    obj = [...arguments];   // ES6
    obj.forEach(item => console.log(item));
}

function logger3() {

    // convert arguments to Array
    obj = Array.from(arguments)
    obj.forEach(item => console.log(item));

}

// logger(1, 2, 3);
// logger2(1, 2, 3);
logger3(1, 2, 3);   // 1, 2, 3