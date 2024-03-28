/*
* event
* 동작이나 사건이 발생. (키보드 입력, 마우스 클릭, 스크롤)
*/
const button = document.querySelector("button");
const removeButton = document.querySelector(".remove");

function handler(event) {
    console.log(event);
}

function removeHandler(event) {
    button.removeEventListener("click", handler);
}

button.addEventListener("click", handler);
removeButton.addEventListener("click", removeHandler);
