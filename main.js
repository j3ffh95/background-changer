const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  document.body.style.background = randomColor();
});

const randomColor = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};
