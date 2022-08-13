import '../css/common.css';
// const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

inputFlatpickr = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(inputFlatpickr, options); 

const timer = {
    start() {
        const startTime = Data.now();

        setInterval(() => {
            console.log('ssss')
            // const currentTime = Data.now();
        }, 1000);
    }
}