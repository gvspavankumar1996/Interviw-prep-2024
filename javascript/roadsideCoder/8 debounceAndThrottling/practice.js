let button = document.querySelector(".increment_btn");
let btnPressed = document.querySelector(".increment_pressed");
let btnDebounce = document.querySelector(".increment_count");
let btnThrottle = document.querySelector(".throttle_count");
let pressedCount = 0;
let debounceCount = 0;
let throttleCount = 0;

const myDebounce = (fn, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const debouncedCount = myDebounce(() => {
  btnDebounce.innerHTML = ++debounceCount;
}, 1000);

const myThrottle = (fn, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();

    if (now - last < delay) return;
    last = now;
    fn(...args);
  };
};

const throttledCount = myThrottle(() => {
  btnThrottle.innerHTML = ++throttleCount;
}, 5000);

button.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount;

  debouncedCount();
  throttledCount();
});

console.log(button);
