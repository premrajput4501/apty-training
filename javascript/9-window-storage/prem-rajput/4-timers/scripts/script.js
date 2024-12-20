const countdownInput = document.getElementById("countdownInput");
const startCountdown = document.getElementById("startCountdown");
const countdownDisplay = document.getElementById("countdownDisplay");
const startStopwatch = document.getElementById("startStopwatch");
const stopStopwatch = document.getElementById("stopStopwatch");
const resetStopwatch = document.getElementById("resetStopwatch");
const stopwatchDisplay = document.getElementById("stopwatchDisplay");

let countdownTimer;
let stopwatchTimer;
let elapsed = 0;

startCountdown.addEventListener("click", () => {
    clearInterval(countdownTimer);
    let time = parseInt(countdownInput.value) || 0;
    countdownDisplay.textContent = `Time Remaining: ${time}`;
    countdownTimer = setInterval(() => {
        time--;
        countdownDisplay.textContent =
            time > 0 ? `Time Remaining: ${time}` : "Time's up!";
        if (time <= 0) clearInterval(countdownTimer);
    }, 1000);
});

startStopwatch.addEventListener("click", () => {
    if (!stopwatchTimer) {
        stopwatchTimer = setInterval(() => {
            elapsed++;
            stopwatchDisplay.textContent = `Elapsed Time: ${elapsed} seconds`;
        }, 1000);
    }
});

stopStopwatch.addEventListener("click", () => {
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;
});

resetStopwatch.addEventListener("click", () => {
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;
    elapsed = 0;
    stopwatchDisplay.textContent = "Elapsed Time: 0 seconds";
});
