const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const alertSound = document.getElementById("alert");
const messageElement = document.getElementById("message");

let minutes = 0;
let seconds = 0;
let intervalId = null;

function startCountdown() {
  minutes = parseInt(minutesInput.value, 10);
  seconds = parseInt(secondsInput.value, 10);

  if (minutes < 0 || seconds < 0 || isNaN(minutes) || isNaN(seconds)) {
    alert("Please enter a valid time.");
    return;
  }

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(intervalId);
        alertSound.play();
        messageElement.textContent = "Hết giờ!";
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    minutesInput.value = minutes;
    secondsInput.value = seconds;
  }, 1000);
}

function resetCountdown() {
  clearInterval(intervalId);
  minutesInput.value = 0;
  secondsInput.value = 0;
  messageElement.textContent = "";
}

startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);