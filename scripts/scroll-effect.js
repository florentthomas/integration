function scroll_effect(next_section, li_elts_section) {
  if (typeof next_section !== "undefined" && next_section !== null) {
    if (next_section == null) {
      return;
    }
    let index_next_section = null;
    let index_current_section = null;

    li_elts_section.forEach((li_elt_section, index) => {
      if (li_elt_section.classList.contains("is-visible")) {
        index_current_section = index;
      }

      if (li_elt_section.id == next_section.id) {
        index_next_section = index;
      }
    });

    if (li_elts_section[index_current_section] == undefined) {
      return;
    }
    if (
      (index_current_section == 0 &&
        index_next_section == li_elts_section.length - 1) ||
      (index_current_section == li_elts_section.length - 1 &&
        index_next_section == 0)
    ) {
      return;
    } else if (index_current_section < index_next_section) {
      li_elts_section[index_current_section].style.transform =
        "translateY(-5%)";
    } else {
      li_elts_section[index_current_section].style.transform = "translateY(5%)";
    }

    setTimeout(function () {
      li_elts_section[index_current_section].style.transform = "translateY(0)";
    }, 700);
  } else {
    return;
  }
}
