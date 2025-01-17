// Debouncing and Throttling in Javascript
// Ques 1 - Create a button UI and add debounce as follows =>
// --> Show "Button Pressed <X> Times" every time button is pressed
// --> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const press = document.querySelector(".increment_pressed");
const debounce = document.querySelector(".increment_count");
const throttle = document.querySelector(".throttle_count");
let pressedCount = 0;
let debounceCount = 0;
let throttleCount = 0;

// const debouncedCount = _.debounce(() => {
//   debounce.innerHTML = ++debounceCount;
// }, 2000);

//polyfill debounce
const myDebounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};
const debouncedCount = myDebounce(() => {
  debounce.innerHTML = ++debounceCount;
}, 500);

//polyfill throttle
const myThrottle = (cb, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    cb();
  };
};

const throttledCount = myThrottle(() => {
  throttle.innerHTML = ++throttleCount;
}, 500);

btn.addEventListener("click", () => {
  press.innerHTML = ++pressedCount;
  debouncedCount();
  throttledCount();
});
