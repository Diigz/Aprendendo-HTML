const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const list = document.querySelector("list");

let active = 0;
const total = items.length;
let timer;

function update(direction) {
  document.querySelector(".item.active").classList.remove("active");

  items[active].classList.add("active");

  if (direction > 0) {
    active = active + 1;
    if (active === total) {
      active = 0;
    }
  } else if (direction < 0) {
    active = active - 1;
    if (active < 0) {
      active = total - 1;
    }
  }
}

prevButton.addEventListener("click", () => {
  update("-1");
});
nextButton.addEventListener("click", () => {
  update("1");
});

clearInterval(timer)
timer = setInterval(() =>{
    update(1)
}, 3000);