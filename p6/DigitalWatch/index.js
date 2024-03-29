const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function clock() {
    const now = new Date();

    hour.innerHTML = String(now.getHours());
    min.innerHTML = String(now.getMinutes());
    sec.innerHTML = String(now.getSeconds());
}

setInterval(clock, 1000);
