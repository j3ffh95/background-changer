const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const random = randomColor();
  document.body.style.background = random;

  btn.textContent = random;
});

const randomColor = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};
