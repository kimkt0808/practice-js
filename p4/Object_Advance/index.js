const obj = {
    x: 1,
    y: 2,
    z: 3
};

for (let key in obj) {
    console.log(key);
}

const obj2 = {
    print() {
        console.log("hello");
    }
};

obj2.print();

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
