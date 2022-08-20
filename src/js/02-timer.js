import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    clockfaceDays: document.querySelector('[data-days]'),
    clockfaceHours: document.querySelector('[data-hours]'),
    clockfaceMinutes: document.querySelector('[data-minutes]'),
    clockfaceSeconds: document.querySelector('[data-seconds]'),
    flatpickrSelect: document.querySelector('input[type="text"]'),
  }


let choseDate = [];
const currentDate = new Date();

refs.startBtn.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < currentDate) {
        Notiflix.Notify.warning('Please choose a date in the future!');
      }
      choseDate = selectedDates[0];
      refs.startBtn.removeAttribute('disabled', true);
      refs.startBtn.addEventListener('click', timer.start.bind(timer));
    },
  };

flatpickr(refs.flatpickrSelect, options);

  class Timer {
    constructor({ onTick }) {
      this.intervalId = null;
      this.isActive = false;
      this.onTick = onTick;
  
      this.init();
    }
  
    init() {
      const time = this.convertMs(0);
      this.onTick(time);
    }
  
    start() {
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      this.changeBodyColor()
      this.intervalId = setInterval(() => {
         this.changeBodyColor()

      }, 1000);
    }
   convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = this.pad(Math.floor(ms / day));
        // Remaining hours
        const hours = this.pad(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));
      
        return { days, hours, minutes, seconds };
      }
    // Добавляет к часам минутам и секундам нолик
    pad(value) {
      return String(value).padStart(2, "0");
    }
    changeBodyColor() {
    const currentTime = new Date();
    const deltaTime = choseDate - currentTime;
    const time = this.convertMs(deltaTime);
    this.onTick(time);
    refs.startBtn.setAttribute('disabled', true);
    if (deltaTime <= 1000){
      clearInterval(this.intervalId);
      refs.startBtn.removeAttribute('disabled', true);
      return;
    }
  }
  }
  
  const timer = new Timer({
    onTick: updateClockface,
  });
  
  refs.startBtn.addEventListener("click", timer.start.bind(timer));

  
  function updateClockface({ days, hours, minutes, seconds }) {
    refs.clockfaceDays.textContent = `${days}:`;
    refs.clockfaceHours.textContent = `${hours}:`;
    refs.clockfaceMinutes.textContent = `${minutes}:`;
    refs.clockfaceSeconds.textContent = `${seconds}`;
  }