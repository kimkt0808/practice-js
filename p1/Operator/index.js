/*
* 산술 연산자
* (+, -, *, /)
*/
console.log(10 / 5);
console.log(10 % 5);

/*
* 증감 연산자
* (++, --)
*/
let n = 10;
n++;
console.log(n);

/*
* 비교 연산자
* (>, <, >=, <=, ===, !==)
*/
const a = 10;
const b = 20;
console.log(a < b);
console.log(a === b);

/*
* 논리 연산자
* (&&, ||, !)
*/
const c = 2 < 3;
const d = 30 > 50;
console.log(c && d);

/*
* 삼항 연산자
* (조건 ? 참 : 거짓)
*/
console.log(2 < 3 ? "참" : "거짓");

/*
* 대입 연산자
* (+=, -=, *=, /=, %=, **=)
*/
let number = 10;
console.log(number += 2);

/*
* 전개 구문
*/
const numbers = [1, 2, 3];
const number2 = [4, 5, 6];
console.log(...numbers);

const newNumbers = [...numbers, ...number2];
console.log(newNumbers);
