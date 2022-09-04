
const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

class Timer {

  start() {
    this.changeBodyColor()
    this.intervalId = setInterval(() => {
      this.changeBodyColor()
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    const color = this.getRandomHexColor();
    refs.startBtn.removeAttribute('disabled', true);
    refs.stopBtn.setAttribute('disabled', true);
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  changeBodyColor() {
    const color = this.getRandomHexColor();
    document.body.style.backgroundColor = color;
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled', true);
  }
}

const timer = new Timer();

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));