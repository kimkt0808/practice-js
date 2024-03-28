/* function */
function sum(a, b) {
    console.log(a + b);
}

/* function expression */
const sum2 = function (a, b) {
    console.log(a + b);
}
sum2(10, 20);

/* array function */
const sum3 = (a, b) => console.log(a + b);
const sum4 = (a, b) => a + b;
const sum5 = (a, b) => {
    return a + b;
}