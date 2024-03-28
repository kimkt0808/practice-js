/*
* 원시 데이터 타입 (string, number, bigint, boolean, undefined, null)
* 객체가 아니면서 메소드도 가지지 않는 데이터
*/

/* number */
const num = 123;
console.log(typeof num);

/* bigint */
const big_num = 123n;
console.log(typeof big_num);

/* string */
const str = "kkt";
console.log(typeof str);

const age = 20;
const job = "개발자";

const msg = `저는 ${job}이고, ${age}살 입니다.`;
console.log(msg);

/* boolean */
const isTrue = true;
console.log(typeof isTrue);
