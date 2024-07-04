const incressEl = document.querySelector(".incress");
const resetEl = document.querySelector(".reset");
const decressEl = document.querySelector(".dicress");
const textEl = document.querySelector(".text");

let counter = 0;

incressEl.addEventListener("click", () => {
  counter++;
  textEl.innerHTML = counter;
});
resetEl.addEventListener("click", () => {
  counter = 0;
  textEl.innerHTML = counter;
});
decressEl.addEventListener("click", () => {
  counter--;
  textEl.innerHTML = counter;
});
