import '../css/common.css';
// const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

inputFlatpickr = document.querySelector("#datetime-picker");
startBtn = document.querySelector('button[data-start]');
valueDays = document.querySelector('span[data-days]');
valueHours = document.querySelector('span[data-hours]');
valueMinutes = document.querySelector('span[data-minutes]');
valueSeconds = document.querySelector('span[data-seconds]');
startBtn.disabled = true;
flatpickr(inputFlatpickr, options); 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= new Date()) {
        document.querySelector('button[data-start]').disabled = true;
        clearInterval(intervalID);
         Notiflix.Notify.warning('Please choose a date in the future');
         return;
        } 
        startBtn.disabled = false;
        startBtn.addEventListener('click', timer);
        function timer() {
            const intervalID = setInterval(() => {
                const currentData = Data.now();
                const delta = chooiceData - currentData;
                convertMs(delta);
            }, 1000)
          document.querySelector('button[data-start]').disabled = true;
          if (delta <= 10) {
            clearInterval(intervalID);
            // if (daysElement.textContent === 0 && hoursElement.textContent === 0 && minutesElement.textContent === 0 && secondsElement.textContent === 0) {
            //     clearInterval(intrvalId)
            // }
            return;
          }
        }
    console.log(selectedDates[0]);
  },
};

// Для подсчета значений
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// console.log(valueDays.textContent);
// console.log(valueHours.textContent);
// console.log(valueMinutes.textContent);
// console.log(valueSeconds.textContent);

// Форматирование времени
function addLeadingZero(value) {
  return String(value).startBtn(2, '0');
}

// const timer = {
//     start() {
//         const startTime = Data.now();

//         setInterval(() => {
//             console.log('ssss')
//             // const currentTime = Data.now();
//         }, 1000);
//     }
// }