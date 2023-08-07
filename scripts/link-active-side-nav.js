function link_active_side_nav(next_section, li_elts_side_nav) {
  if (typeof next_section !== "undefined" && next_section !== null) {
    const next_section_id = next_section.id;

    li_elts_side_nav.forEach((li_elt) => {
      if (li_elt.classList.contains("side-list-is-active")) {
        li_elt.classList.remove("side-list-is-active");
      }
      if (li_elt.getAttribute("data-section") == next_section_id) {
        li_elt.classList.add("side-list-is-active");
      }
    });
  } else {
    return;
  }
}
