import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const refs = {
  submitBtn: document.querySelector('button[submit]')
}

refs.submitBtn.addEventListener('click', createPromise);

const promise = new Promise((resolve, reject) => createPromise);
  
 function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}



promise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  
  // Asynchronous operation
