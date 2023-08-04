const hamburger_elt = document.getElementById("hamburger");
const container_elt = document.getElementsByClassName("container");
const main_menu_elt = document.getElementsByClassName("main-menu");
const return_to_main_elt = document.getElementsByClassName("return-to-main");

hamburger_elt.addEventListener("click", function () {
  container_elt[0].classList.add("container-shrink");
  main_menu_elt[0].classList.add("main-menu-active");
  return_to_main_elt[0].style.display = "block";
});

return_to_main_elt[0].addEventListener("click", function () {
  container_elt[0].classList.remove("container-shrink");
  this.style.display = "none";
  main_menu_elt[0].classList.remove("main-menu-active");
});
