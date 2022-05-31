const button = document.querySelector('.image');
let adviceId = document.querySelector('#span');
let adviceText = document.querySelector('h1');

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then((data) => data.json())
    .then((advice) => {
      adviceText.innerText = advice.slip.advice;
      adviceId.innerText = advice.slip.id;
    });
}

button.addEventListener('click', () => {
  getAdvice();
});

getAdvice();
