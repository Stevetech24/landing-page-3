const dropMenu1 = document.getElementById("drop-menu-1");
const dropMenu2 = document.getElementById("drop-menu-2");
const dropMenu3 = document.getElementById("drop-menu-3");
const dropMenu4 = document.getElementById("drop-menu-4");
const productBtn = document.getElementById("product-btn");
const solutionBtn = document.getElementById("solution-btn");
const resourcesBtn = document.getElementById("resources-btn");
const priceBtn = document.getElementById("price-btn");
const menuBarResponsive = document.getElementById("responsive-menu-bar");
const menuBar = document.getElementById("menu-bar");
const closeMenu = document.getElementById("close-menu");
const container = document.getElementsByClassName(".container");

productBtn.addEventListener(
  "mouseenter",
  () => (dropMenu1.style.display = "block")
);
productBtn.addEventListener(
  "mouseleave",
  () => (dropMenu1.style.display = "none")
);
//
solutionBtn.addEventListener(
  "mouseenter",
  () => (dropMenu2.style.display = "block")
);
solutionBtn.addEventListener(
  "mouseleave",
  () => (dropMenu2.style.display = "none")
);
//
priceBtn.addEventListener(
  "mouseenter",
  () => (dropMenu3.style.display = "block")
);
priceBtn.addEventListener(
  "mouseleave",
  () => (dropMenu3.style.display = "none")
);
//
resourcesBtn.addEventListener(
  "mouseenter",
  () => (dropMenu4.style.display = "block")
);
resourcesBtn.addEventListener(
  "mouseleave",
  () => (dropMenu4.style.display = "none")
);
menuBar.addEventListener("click", () => {
  menuBarResponsive.style.transform = " translateX(0)";
  menuBar.style.display = "none";
  closeMenu.style.display = "block";
  // container.style.position = "static";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    menuBar.style.display = "none";
    closeMenu.style.display = "none";
  }
});

closeMenu.addEventListener("click", () => {
  menuBarResponsive.style.transform = " translateX(-500px)";
  closeMenu.style.display = "none";
  menuBar.style.display = "block";
});
