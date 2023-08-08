const li_elts_section = document.querySelectorAll(".main-content li");
const li_elts_side_nav = document.querySelectorAll("#side-list li");
const main_menu_li_elts = document.querySelectorAll(".main-menu li");
const link_hire_us = document.getElementById("link-hire-us");
const link_hire_us_home = document.getElementsByClassName(
  "container-link-hire-us"
);

let next_section = null;
let scroll_allowed = true;

li_elts_side_nav.forEach((li_elt_side_nav) => {
  li_elt_side_nav.addEventListener("click", (event) => {
    next_section = get_next_section_to_show(event, li_elts_section);
    scroll_effect(next_section, li_elts_section);
    select_menu_section(next_section, li_elts_section);
    link_active_side_nav(next_section, li_elts_side_nav);
    link_active_main_menu(next_section, main_menu_li_elts);
    show_link_hire_us(next_section, link_hire_us);
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
  link_active_side_nav(next_section, li_elts_side_nav);
  link_active_main_menu(next_section, main_menu_li_elts);
  show_link_hire_us(next_section, link_hire_us);

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
    link_active_side_nav(next_section, li_elts_side_nav);
    link_active_main_menu(next_section, main_menu_li_elts);
    show_link_hire_us(next_section, link_hire_us);

    setTimeout(function () {
      scroll_allowed = true;
    }, 1000);
  }
});

link_hire_us.addEventListener("click", function (e) {
  e.preventDefault();
  const hire_us_section = document.getElementById("hire-us");
  select_menu_section(hire_us_section, li_elts_section);
  link_active_side_nav(hire_us_section, li_elts_side_nav);
  link_active_main_menu(hire_us_section, main_menu_li_elts);
  show_link_hire_us(hire_us_section, link_hire_us);
});

link_hire_us_home[0].addEventListener("click", function (e) {
  e.preventDefault();
  const hire_us_section = document.getElementById("hire-us");
  select_menu_section(hire_us_section, li_elts_section);
  link_active_side_nav(hire_us_section, li_elts_side_nav);
  link_active_main_menu(hire_us_section, main_menu_li_elts);
  show_link_hire_us(hire_us_section, link_hire_us);
});
