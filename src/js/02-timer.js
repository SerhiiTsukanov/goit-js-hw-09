// import '../css/common.css';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

inputFlatpickr = document.querySelector('#datetime-picker');
startBtn = document.querySelector('button[data-start]');
valueDays = document.querySelector('span[data-days]');
valueHours = document.querySelector('span[data-hours]');
valueMinutes = document.querySelector('span[data-minutes]');
valueSeconds = document.querySelector('span[data-seconds]');


document.querySelector('[data-start]').disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
     if (selectedDates[0] <= new Date()) {
         Notiflix.Notify.warning('Please choose a date in the future');
         return;
        } 
        document.querySelector('[data-start]').disabled = false;
        startBtn.addEventListener('click', timer);
    function timer() {
      // intervalID: null,
      // this.isActive = true;
          
      document.querySelector('button[data-start]').disabled = true;
      // if (isActive) {
      //   return;
      // }
      const intervalID = setInterval(() => {
        
        // if (delta <= 100) {
        //   clearInterval(intervalID);
        //   return;
        // }
        const currentDate = Date.now();
          const delta = selectedDates - currentDate;
        
        addLeadingZero(convertMs(delta));
      }, 1000)
      
            // if () {clearInterval(intervalID)}
        }
    console.log(selectedDates[0]);
  },
};

flatpickr(inputFlatpickr, options); 

// Добавляет 0
function pad(value) {
  return String(value).padStart(2, 0);
}

// Для подсчета значений
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



// Форматирование времени
function addLeadingZero({ days, hours, minutes, seconds }) {
valueDays.textContent = days;
valueHours.textContent = hours;
valueMinutes.textContent = minutes;
valueSeconds.textContent = seconds;
}

// const timer = {
//     start() {
//         const startTime = Data.now();