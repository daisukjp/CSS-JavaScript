// function hello(callback, lastname) {
//     console.log(callback)
//     console.log('hello ' + callback(lastname));
    
// }

// function getName() {
//     return 'Daisuke Sato';
// }
// const getFirstName = function() {
//     return 'Daisuke'
// }
// hello(function(name) {
//     return 'Daisuke' + name;
// }, 'Sato');


// アロー
// hello(() => 'Daisuke');

function doSomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function puls(a,b) {
    return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 3, puls);