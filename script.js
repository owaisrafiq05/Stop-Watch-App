const displayElement = document.querySelector('#display');
const startButtonElement = document.querySelector('#start');
const stopButtonElement = document.querySelector('#stop');
const resetButtonElement = document.querySelector('#reset');
let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    displayElement.textContent = formatTime(elapsedTime);
  }, 10);
  startButtonElement.disabled = true;
  stopButtonElement.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButtonElement.disabled = false;
  stopButtonElement.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayElement.textContent = formatTime(elapsedTime);
  startButtonElement.disabled = false;
  stopButtonElement.disabled = true;
}

function formatTime(time) {
  const date = new Date(time);
  const min = date.getMinutes().toString().padStart(2, '0');
  const sec = date.getSeconds().toString().padStart(2, '0');
  const millisec = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
  return `${min}:${sec}:${millisec}`;
}

startButtonElement.addEventListener('click', startTimer);
stopButtonElement.addEventListener('click', stopTimer);
resetButtonElement.addEventListener('click', resetTimer);
