const timer_el = document.getElementById("timer");
const start_el = document.getElementById("start");
const stop_el = document.getElementById("stop");
const reset_el = document.getElementById("reset");

let startTime = 0;
/**
 * to show time elapsed
 */
let timeElapsed = 0;
let interval;

function formattedTime(timeElapsed)
{
    const milliseconds = Math.floor((timeElapsed % 1000) / 10);
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(timeElapsed / (1000 * 60 * 60));
/**
 * short way of writting if else statement
 */
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
        );

}

function startTimer()
{
    startTime = Date.now() - timeElapsed;
/**
 * setIntevarl- To be update every 10 seconds
 */
    interval = setInterval(() => {
        timeElapsed = Date.now() - startTime;
        timer_el.textContent = formattedTime(timeElapsed);
    }, 10);

    start_el.disabled = true;
    stop_el.disabled = false;
}

function stopTimer()
{
    clearInterval(interval);
    start_el.disabled = false;
    stop_el.disabled = true;
}

function resetTimer()
{
    clearInterval(interval);
    timer_el.textContent = "00:00:00";

    start_el.disabled = false;
    stop_el.disabled = true;
}


start_el.addEventListener("click", startTimer);
stop_el.addEventListener("click", stopTimer);
reset_el.addEventListener("click",resetTimer);