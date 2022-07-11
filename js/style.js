const navRight = document.querySelector("nav.right");
const overlay = document.querySelector(".overlay");
const humburger = document.querySelector(".humburger");
const body = document.querySelector("body");
const navlinks = document.querySelector(".nav-links");
const lines = document.querySelectorAll(".line");

const remove = () => {
  navRight.classList.remove("open");
  overlay.classList.remove("open");
};
body.addEventListener("click", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  let clicker = document.createElement("div");
  var parentPositionLeft = clicker.getBoundingClientRect().left;
  var parentPositionTop = clicker.getBoundingClientRect().top;

  clicker.style.left = parentPositionLeft + x + "px";
  clicker.style.top = parentPositionTop + y + "px";

  clicker.className += "clicked";
  document.body.appendChild(clicker);

  setTimeout(() => {
    document.body.removeChild(clicker);
  }, 590);
});

// nav

humburger.addEventListener("click", () => {
  navRight.classList.toggle("open");
  overlay.classList.toggle("open");

  navlinks.addEventListener("click", () => {
    remove();
  });
  overlay.addEventListener("click", () => {
    remove();
  });
});