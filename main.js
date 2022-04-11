window.addEventListener("DOMContentLoaded", animation);
document.documentElement.setAttribute("data-theme", "light"); // set theme light
localStorage.setItem("data-theme", "light");

function animation() {
  document.querySelector("#loading_container").classList.remove("hidden");
  document.querySelector("body").style.position = "fixed";
  document.querySelector("body").style.overflowY = "scroll";

  console.log("it works");
  setTimeout(removeAnimation, 2000);
}

// burger menu
const btn = document.querySelector("#menu-btn");
const nav = document.querySelector("#menu");

function navToggle() {
  document.body.classList.toggle("no-scroll");
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  nav.addEventListener("click", (e) => {
    document.body.classList.add("no-scroll");
    removeMenu(e.target);
  });
}
btn.addEventListener("click", navToggle);
function removeMenu(target) {
  console.log(target);
  if (!target.contains(document.querySelector("#mySwitch"))) {
    console.log("here");
    nav.classList.add("hidden");
    document.body.classList.remove("no-scroll");
    btn.classList.remove("open");
  }
}
function removeAnimation() {
  document.querySelector("#loading_container").style.display = "none";
  document.querySelector("body").style.position = "static";
  document.querySelector("body").style.overflowY = "auto";
  console.log("it worksssss");
  gsap.from(".header_graphics", {
    x: 100,
    duration: 3,
  });
}

let theme = localStorage.getItem("data-theme");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};

// Get the element based on ID
const checkbox = document.querySelector("#switch");
// Apply retrived them to the website
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

