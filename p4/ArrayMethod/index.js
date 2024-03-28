/* push */
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.push(7, 8)
console.log(arr);

/* pop */
arr.pop();
arr.pop();
console.log(arr);

/* unshift */
arr.unshift(10, 20, 30);
console.log(arr);

/* shift */
arr.shift();
arr.shift();
console.log(arr);

/* forEach */
arr.forEach((number, index) => {
    console.log(`${index} 위치의 요소 : ${number}`);
});

/* map */
const newArr = arr.map((number, index) => number + 1);
console.log(newArr);

/* find */
console.log(arr.find((number) => number > 3));

/* findIndex */
console.log(arr.findIndex((number) => number > 3));

/* fill */
arr.fill(10, 3);
console.log(arr);

/* slice */
console.log(arr.slice(2, 4));

/* join */
const arr2 = ["hello", "world", "hi"];
console.log(arr.join(";"));

/* filter */
console.log(arr.filter((number) => number > 3));

