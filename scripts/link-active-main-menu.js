function link_active_main_menu(next_section, main_menu_li_elts) {
  const next_section_id = next_section.id;

  main_menu_li_elts.forEach((li_elt) => {
    if (li_elt.classList.contains("is-active")) {
      li_elt.classList.remove("is-active");
    }

    if (li_elt.getAttribute("data-section") == next_section_id) {
      li_elt.classList.add("is-active");
    }
  });
}
