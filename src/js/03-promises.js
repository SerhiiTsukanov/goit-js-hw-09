import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.target;
  const firstDelay = parseInt(delay.value);
  const delayStep = parseInt(step.value);
  const amountNumber = parseInt(amount.value);

  countPromises(amountNumber, firstDelay, delayStep);
}

function countPromises(count, delay, step) {
  for (let i = 1; i <= count; i += 1) {
    let time = delay + step * (i - 1);
    createPromise(i, time)
    
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
      timeout: 2000,
    });
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
      timeout: 2000,
    });
  });

}


}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    
}