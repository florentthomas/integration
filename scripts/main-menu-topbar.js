const hamburger_elt = document.getElementById("hamburger");
const container_elt = document.getElementById("container");
const main_menu_elt = document.getElementById("main-menu");
const return_to_main_elt = document.getElementById("return-to-main");

hamburger_elt.addEventListener("click", function () {
  container_elt.classList.add("container-shrink");
  main_menu_elt.classList.add("main-menu-active");
});

return_to_main_elt.addEventListener("click", function () {
  container_elt.classList.remove("container-shrink");
  main_menu_elt.classList.remove("main-menu-active");
});

main_menu_li_elts.forEach((li_elt) => {
  li_elt.addEventListener("click", function (event) {
    container_elt.classList.remove("container-shrink");
    main_menu_elt.classList.remove("main-menu-active");

    const next_section = get_next_section_to_show(event, li_elts_section);
    select_menu_section(next_section, li_elts_section);
    link_active_side_nav(next_section, li_elts_side_nav);
    link_active_main_menu(next_section, main_menu_li_elts);
    show_link_hire_us(next_section, link_hire_us);
  });
});
