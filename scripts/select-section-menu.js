function select_menu_section(next_section, li_elts_section) {
  if (next_section == null) {
    return;
  }
  li_elts_section.forEach((li_elt) => {
    if (li_elt.classList.contains("is-visible")) {
      li_elt.classList.remove("is-visible");
    }
  });

  setTimeout(function () {
    next_section.classList.add("is-visible");
  }, 600);
}
