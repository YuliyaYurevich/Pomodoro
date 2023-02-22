const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const gear = document.querySelector('.settings');
const ring = document.querySelector('.ring');

let intervalStart;

function startTimer() {
  let minutes = minute.value;
  let seconds = second.value;

  minute.disabled = true;
  second.disabled = true;

  intervalStart = setInterval(timer, 1000);

  function timer() {
    seconds--;
    seconds == '-1' ? (seconds = '59') : seconds;
    seconds == '59' ? minutes-- : minutes;

    second.value = seconds.toString().padStart(2, '0');
    minute.value = minutes.toString().padStart(2, '0');

    start.classList.add('hidden');
    stop.classList.remove('hidden');

    console.log(minutes);

    if (minutes == 0 && seconds == 0) {
      minute.value = '00';
      second.value = '00';
      clearInterval(intervalStart);
      ring.style.stroke = 'red';
      alert('Time is up');
    }
  }
}

function stopTimer() {
  clearInterval(intervalStart);
  stop.classList.add('hidden');
  start.classList.remove('hidden');
}

function removeDisabled() {
  minute.disabled = false;
  second.disabled = false;
}

gear.addEventListener('click', removeDisabled);
start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
