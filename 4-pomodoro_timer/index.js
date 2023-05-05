const input_el = document.getElementById("time-seconds");
const timer_el = document.getElementById("timer");
const start_el = document.getElementById("start");
const stop_el = document.getElementById("stop");
const reset_el = document.getElementById("reset");

let interval;

function updateTime()
{
    let interval;
    const input_value = input_el.value;
    let timeLeft = input_value;

    interval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        timer_el.innerHTML = formattedTime;
        timeLeft--;

        if((timeLeft + 1) === 0)
        {
            alert("Your time is up!");
            clearInterval(interval);
        }
    }, 1000);
}

function startTimer()
{
    updateTime();
}
function stopTimer()
{
    clearInterval(interval);
}
function resetTimer()
{

}


start_el.addEventListener("click", startTimer);
stop_el.addEventListener("click", stopTimer);
reset_el.addEventListener("click", resetTimer);
