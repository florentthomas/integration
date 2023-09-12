import {main_menu_li_elts} from "./change-section.js";

const hamburger_elt = document.getElementById("hamburger");
const container_elt = document.getElementById("container");
const main_menu_elt = document.getElementById("main-menu");
const return_to_main_elt = document.getElementById("return-to-main");

main_menu_li_elts.forEach((li_elt) => {
  li_elt.addEventListener("click", () => {
    container_elt.classList.remove("container-shrink");
    main_menu_elt.classList.remove("main-menu-active");
  });
});

hamburger_elt.addEventListener("click", function () {
  container_elt.classList.add("container-shrink");
  main_menu_elt.classList.add("main-menu-active");
});

return_to_main_elt.addEventListener("click", function () {
  container_elt.classList.remove("container-shrink");
  main_menu_elt.classList.remove("main-menu-active");
});
