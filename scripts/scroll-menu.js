const li_elts_side_nav = document.querySelectorAll("#side-list li");

let scroll_allowed = true;

document.addEventListener("wheel", function (event) {
  if (!scroll_allowed) {
    return;
  }
  let next_li = null;
  let previous_li = null;

  li_elts_side_nav.forEach((li_elt, index) => {
    if (li_elt.classList.contains("side-list-is-active")) {
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

  const delta = Math.sign(event.deltaY);

  if (delta > 0) {
    next_li.classList.add("side-list-is-active");

    select_menu_section(next_li.textContent.toLowerCase());
  } else {
    previous_li.classList.add("side-list-is-active");
    select_menu_section(previous_li.textContent.toLowerCase());
  }

  scroll_allowed = false;

  setTimeout(() => {
    scroll_allowed = true;
  }, 700);
});
