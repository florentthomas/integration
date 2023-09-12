import {handleSectionChange} from "../functions/handle-section-change.js";

const link_hire_us = document.getElementById("link-hire-us");
const container_link = document.getElementById("container-link-hire-us");
const links_array = [];
links_array.push(link_hire_us, container_link);

const li_elts_section = document.querySelectorAll(".main-content li");
const li_elts_side_nav = document.querySelectorAll("#side-list li");
const main_menu_li_elts = document.querySelectorAll(".main-menu li");

document.addEventListener("wheel", handleSectionChange);

document.addEventListener("touchend", handleSectionChange);

li_elts_side_nav.forEach((li_elt_side_nav) => {
  li_elt_side_nav.addEventListener("click", handleSectionChange);
});

main_menu_li_elts.forEach((li_elt) => {
  li_elt.addEventListener("click", handleSectionChange);
});

links_array.forEach((elt) => {
  elt.addEventListener("click", (e) => {
    e.preventDefault();
    const hire_us_section = document.getElementById("hire-us");

    show_next_section(hire_us_section, li_elts_section);
    set_link_active_side_nav(hire_us_section, li_elts_side_nav);
    set_link_active_main_menu(hire_us_section, main_menu_li_elts);
    show_link_hire_us(hire_us_section, link_hire_us);
  });
});

export {main_menu_li_elts};
