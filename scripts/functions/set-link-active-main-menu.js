/**
 * Set and remove class active on li element of main nav
 *
 * @param {HTMLLIElement} next_section - next section to show
 * @param {HTMLCollection} main_menu_li_elts - List of li elements of main nav
 * @returns {void}
 */
function set_link_active_main_menu(next_section, main_menu_li_elts) {
  if (typeof next_section !== "undefined" && next_section !== null) {
    const next_section_id = next_section.id;

    main_menu_li_elts.forEach((li_elt) => {
      if (li_elt.classList.contains("is-active")) {
        li_elt.classList.remove("is-active");
      }

      if (li_elt.getAttribute("data-section") == next_section_id) {
        li_elt.classList.add("is-active");
      }
    });
  } else {
    return;
  }
}

export {set_link_active_main_menu};
