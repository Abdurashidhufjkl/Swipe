let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
let hover = document.querySelectorAll(".footer a");
let elements = document.querySelectorAll("p, a, li, h1, h2, h3, h4, span, label");

dark.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.backgroundColor = "#121212";
  document.body.style.color = "white";

  elements.forEach((el) => {
    el.style.color = "white";
  });
});

light.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";

  elements.forEach((el) => {
    el.style.color = "black";
  });

  
});

