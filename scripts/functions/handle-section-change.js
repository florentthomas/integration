import {scroll_effect} from "./scroll-effect.js";
import {show_next_section} from "./show-next-section.js";
import {set_link_active_main_menu} from "./set-link-active-main-menu.js";
import {set_link_active_side_nav} from "./set-link-active-side-nav.js";
import {show_link_hire_us} from "./show-link-hire-us.js";
import {get_next_section_to_show} from "./get-next-section-to-show.js";

const li_elts_section = document.querySelectorAll(".main-content li");
const li_elts_side_nav = document.querySelectorAll("#side-list li");
const main_menu_li_elts = document.querySelectorAll(".main-menu li");
const link_hire_us = document.getElementById("link-hire-us");

let scroll_allowed = true;
let pos_touchstart_Y = null;
let timestamp_pos_touchstart_Y = null;

document.addEventListener("touchstart", function (event) {
  pos_touchstart_Y = event.touches[0].clientY;
  timestamp_pos_touchstart_Y = event.timeStamp;
});

/**
 *
 * @param {Event} event
 * @returns
 */

function handleSectionChange(event) {
  if (scroll_allowed === false) {
    return;
  }

  scroll_allowed = false;
  let next_section = null;

  if (event.type === "touchend") {
    const time_ms =
      parseFloat(event.timeStamp) - parseFloat(timestamp_pos_touchstart_Y);

    const distance_touchstart_touchend = Math.abs(
      pos_touchstart_Y - event.changedTouches[0].clientY
    );

    if (distance_touchstart_touchend < 50 || time_ms > 800) {
      return;
    }

    next_section = get_next_section_to_show(
      event,
      li_elts_section,
      pos_touchstart_Y
    );
  } else {
    next_section = get_next_section_to_show(event, li_elts_section);
  }

  scroll_effect(next_section, li_elts_section);
  show_next_section(next_section, li_elts_section);
  set_link_active_side_nav(next_section, li_elts_side_nav);
  set_link_active_main_menu(next_section, main_menu_li_elts);
  show_link_hire_us(next_section, link_hire_us);

  setTimeout(function () {
    scroll_allowed = true;
  }, 1000);
}

export {handleSectionChange};
