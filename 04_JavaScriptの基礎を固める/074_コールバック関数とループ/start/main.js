// const arry = [1,2,3,4,5];


// for(let i = 0; 0 < Array.length; i++) {
//     console.log(array[i]);
// }
// function foreach(ary) {
//     for(let i = 0; i < ary.length; i++) {
//         console.log(ary[i]);
//     }
// }

// foreach(arry);

// callback function

const arry = [1,2,3,4,5];

function foreach(ary, callback) {
    for(let i = 0; i < ary.length; i++) {
        callback(ary[i]);
    }
}

function log(val) {
    console.log(val);
}

function double(val) {
    val = val * 2;
    log(val);
}

foreach(arry, double);
