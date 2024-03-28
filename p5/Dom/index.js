// const title = document.getElementById("title");
// console.log(title);

// const title_class = document.getElementsByClassName("title_class");
// console.log(title_class);

// const title_tag = document.getElementsByTagName("h2");
// console.log(title_tag);

// const title_i = document.querySelector("#title");
// console.log(title_i);

// const title_c = document.querySelector(".title_class");
// console.log(title_c);

/* return arr */
const title_All = document.querySelectorAll(".title_class");
console.log(title_All);

/* edit */
const edit_title = document.querySelector("#title");
edit_title.innerHTML = "안녕하세요.";
edit_title.style.color = "blue";

/* create */
const body = document.querySelector("body");

const create_title = document.createElement("h3");
create_title.innerHTML = "안녕?";
create_title.style.color = "red";

body.appendChild(create_title);
