const dropMenu1 = document.getElementById("drop-menu-1");
const dropMenu2 = document.getElementById("drop-menu-2");
const dropMenu3 = document.getElementById("drop-menu-3");
const dropMenu4 = document.getElementById("drop-menu-4");
const productBtn = document.getElementById("product-btn");
const solutionBtn = document.getElementById("solution-btn");
const resourcesBtn = document.getElementById("resources-btn");
const priceBtn = document.getElementById("price-btn");

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
