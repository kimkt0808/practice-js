/* function */
function num(cnt) {
    console.log(`${cnt}개`);
}
num(5);

/* Undefined */
function sum(a, b) {
    console.log(a + b);
}
sum(10); // sum(10, undefined);

/* default parameter */
function sum2(a, b = 0) {
    console.log(a + b);
}
sum2(10);

/* arguments */
function sum3(a, b) {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
}
sum3(10, 20, 30);

/* rest parameter */
function sum4(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
sum4(10, 20, 30, 40, 50, 60, 70);