const li_elts_section = document.querySelectorAll(".main-content li");
const li_elts_side_nav = document.querySelectorAll("#side-list li");
let next_section = null;
let scroll_allowed = true;

li_elts_side_nav.forEach((li_elt_side_nav) => {
  li_elt_side_nav.addEventListener("click", (event) => {
    next_section = get_next_section_to_show(event, li_elts_section);
    scroll_effect(next_section, li_elts_section);
    select_menu_section(next_section, li_elts_section);
    scroll_side_nav(event, li_elts_side_nav);
  });
});

document.addEventListener("wheel", (event) => {
  if (scroll_allowed == false) {
    return;
  }
  scroll_allowed = false;

  next_section = get_next_section_to_show(event, li_elts_section);
  scroll_effect(next_section, li_elts_section);
  select_menu_section(next_section, li_elts_section);
  scroll_side_nav(event, li_elts_side_nav);

  setTimeout(function () {
    scroll_allowed = true;
  }, 1000);
});

//smartphone and tab

let pos_touchstart_Y = null;
let time_stamp_startY = null;

document.addEventListener("touchstart", function (event) {
  pos_touchstart_Y = event.touches[0].clientY;
  time_stamp_startY = event.timeStamp;
});

document.addEventListener("touchend", (event) => {
  const time = parseFloat(event.timeStamp) - parseFloat(time_stamp_startY);
  const distance_touchstart_touchend = Math.abs(
    pos_touchstart_Y - event.changedTouches[0].clientY
  );

  if (distance_touchstart_touchend > 100 && time < 800) {
    if (scroll_allowed == false) {
      return;
    }
    scroll_allowed = false;
    next_section = get_next_section_to_show(
      event,
      li_elts_section,
      pos_touchstart_Y
    );
    scroll_effect(next_section, li_elts_section, pos_touchstart_Y);
    select_menu_section(next_section, li_elts_section);
    scroll_side_nav(event, li_elts_side_nav, pos_touchstart_Y);

    setTimeout(function () {
      scroll_allowed = true;
    }, 1000);
  }
});
