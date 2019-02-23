const clock = document.querySelector(".js-clock .clock__text");

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    clock.innerText = time;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    return;
}

init();