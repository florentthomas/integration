/**
 *
 * Show or hide link "hire-us" depending the current section
 *
 * @param {HTMLLIElement} next_section - section to show
 * @param {HTMLAnchorElement} link_elt - Link to hide or show
 * @returns {void}
 */

function show_link_hire_us(next_section, link_elt) {
  if (typeof next_section !== "undefined" && next_section !== null) {
    const next_section_id = next_section.id;

    if (
      next_section_id == "works" ||
      next_section_id == "about" ||
      next_section_id == "contact"
    ) {
      link_elt.style.opacity = "1";
      link_elt.style.visibility = "visible";
    } else {
      link_elt.style.opacity = "0";
      link_elt.style.visibility = "hidden";
    }
  } else {
    return;
  }
}

export {show_link_hire_us};
