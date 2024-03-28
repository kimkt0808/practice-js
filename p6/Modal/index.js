/* modal
* 1. 버튼을 클릭하면 모달이 뜸.
* 2. 모달에서 닫기 버튼을 클릭하면 다시 원상태로 돌아옴.
*/

const openBtn = document.querySelector(".open");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    container.style.display = "flex";
    openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    container.style.display = "none";
    openBtn.style.display = "block";
});
