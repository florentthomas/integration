function scroll_side_nav(event, li_elts_side_nav, pos_touchstart_Y = null) {
  if (event.type == "wheel" || event.type == "touchend") {
    let next_li = null;
    let previous_li = null;
    let current_li = null;

    li_elts_side_nav.forEach((li_elt, index) => {
      if (li_elt.classList.contains("side-list-is-active")) {
        current_li = li_elt;
        if (index == 0) {
          previous_li = li_elts_side_nav[li_elts_side_nav.length - 1];
        } else {
          previous_li = li_elts_side_nav[index - 1];
        }
        if (index == li_elts_side_nav.length - 1) {
          next_li = li_elts_side_nav[0];
        } else {
          next_li = li_elts_side_nav[index + 1];
        }

        li_elt.classList.remove("side-list-is-active");
      }
    });

    let touch_direction = null;

    if (event.type == "touchend") {
      const pos_touchend_Y = event.changedTouches[0].clientY;
      touch_direction = Math.sign(pos_touchstart_Y - pos_touchend_Y);
    }

    const delta = Math.sign(event.deltaY);

    if (delta > 0 || touch_direction > 0) {
      next_li.classList.add("side-list-is-active");
    } else {
      previous_li.classList.add("side-list-is-active");
    }
  } else if (event.type == "click") {
    li_elts_side_nav.forEach((li_elt) => {
      if (li_elt.classList.contains("side-list-is-active")) {
        li_elt.classList.remove("side-list-is-active");
      }
    });
    event.currentTarget.classList.add("side-list-is-active");
  }
}
