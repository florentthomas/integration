/**
 *
 *
 * @param {Event} event
 * @param {HTMLCollection} li_elts_section - List of li elements of main content
 * @param {Number} pos_touchstart_y - Finger start position when scrolling
 * @returns {HTMLLIElement}
 */

function get_next_section_to_show(
  event,
  li_elts_section,
  pos_touchstart_y = null
) {
  let next_section = null;
  let current_section = null;
  let index_current_section = null;

  li_elts_section.forEach((li_elt, index) => {
    if (li_elt.classList.contains("is-visible")) {
      current_section = li_elt;
      index_current_section = index;
    }
  });

  if (event.type == "wheel" || event.type == "touchend") {
    let touch_direction = null;

    if (event.type == "touchend") {
      const pos_touchend_Y = event.changedTouches[0].clientY;
      touch_direction = Math.sign(pos_touchstart_y - pos_touchend_Y);
    }

    const scroll_direction = Math.sign(event.deltaY);

    if (scroll_direction > 0 || touch_direction > 0) {
      //scroll down
      if (index_current_section + 1 == li_elts_section.length) {
        next_section = li_elts_section[0];
      } else {
        next_section = li_elts_section[index_current_section + 1];
      }
    } else {
      // scroll up
      if (index_current_section - 1 < 0) {
        next_section = li_elts_section[li_elts_section.length - 1];
      } else {
        next_section = li_elts_section[index_current_section - 1];
      }
    }
  } else if (event.type == "click") {
    //When clicking on menus links
    li_elts_section.forEach((li_elt) => {
      if (li_elt.id == event.currentTarget.getAttribute("data-section")) {
        next_section = li_elt;
      }
    });
  }

  if (current_section.id == next_section.id) {
    return;
  }

  return next_section;
}

export {get_next_section_to_show};
