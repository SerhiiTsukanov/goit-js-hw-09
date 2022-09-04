
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

document.querySelector('[data-stop]').disabled = true;

function changeBackground() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', timerChangeBackground);

function timerChangeBackground() {
  timerId = setInterval(changeBackground, 1000);
  document.querySelector('[data-start]').disabled = true;
  document.querySelector('[data-stop]').disabled = false;
  startBtn.removeEventListener('click', timerChangeBackground);
  stopBtn.addEventListener('click', removeEventListenerFromStopBtn)
};

function removeEventListenerFromStopBtn() {
  clearInterval(timerId);
  document.querySelector('[data-start]').disabled = false;
  document.querySelector('[data-stop]').disabled = true;
  stopBtn.removeEventListener('click', removeEventListenerFromStopBtn);
  startBtn.addEventListener('click', timerChangeBackground);
}