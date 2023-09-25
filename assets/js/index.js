let menu = document.querySelector("#menu-icon");
let Navbar = document.querySelector(".navbar");
menu.onclick = function () {
  menu.classList.toggle("fa-xmark");
  Navbar.classList.toggle("active");
};
window.onscroll = function () {
  menu.classList.remove("fa-xmark");
  Navbar.classList.remove("active");
};
const navbar = document.querySelector("header");
function navbg() {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#fff";
  } else {
    navbar.style.backgroundColor = "";
  }
}

window.onscroll = function () {
  myFunction();
  navbg();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var progress = document.querySelector(".progress-container");
  if (window.scrollY == 0) {
    progress.style.display = "none";
  } else {
    progress.style.display = "block";
    document.getElementById("myBar").style.width = scrolled + "%";
  }
}

