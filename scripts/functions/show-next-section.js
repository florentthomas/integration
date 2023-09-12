/**
 * Set class is-visible to the next section and remove class is-visible to current section
 *
 * @param {HTMLLIElement} next_section - next section to show
 * @param {*} li_elts_section - list of li elements of main content
 * @returns {void}
 */

function show_next_section(next_section, li_elts_section) {
  if (typeof next_section !== "undefined" && next_section !== null) {
    li_elts_section.forEach((li_elt) => {
      if (li_elt.classList.contains("is-visible")) {
        li_elt.classList.remove("is-visible");
      }
    });

    setTimeout(function () {
      next_section.classList.add("is-visible");
    }, 600);
  } else {
    return;
  }
}

export {show_next_section};
