let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let entryEl = document.getElementById("entry-el");
let count = 0;

let increment = () => {
  count += 1;
  countEl.textContent = count;
};

let save = () => {
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  countEl.textContent = 0;
  count = 0;
};
