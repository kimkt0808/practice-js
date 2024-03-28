/* upper, lower case */
const str = "heLLo WoRld!";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

/* trim */
const str2 = "          hello        ";

console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

/* repeat */
const str3 = "hello";

console.log(str3.repeat(3));

/* pad */
const str4 = "hello";

console.log(str4.padStart(10, "*"));
console.log(str4.padEnd(10, "*"));

/* indexOf */
const str5 = "hello";

console.log(str5.indexOf("e"));

/* includes */
const str6 = "hello";

console.log(str6.includes("h"));

/* replace */
const str7 = "hello world world world";

console.log(str7.replace("world", "seoul"));
console.log(str7.replaceAll("world", "seoul"));

/* split */
const str8 = "월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일";

console.log(str8.split(", "));

/* slice */
const str9 = "hello world";

console.log(str9.slice(3, 5));
console.log(str9.slice(-3));