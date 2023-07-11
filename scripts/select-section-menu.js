function select_menu_section(name_section) {
  let section = null;

  switch (name_section) {
    case "home":
      section = "home";
      break;
    case "about":
      section = "about";
      break;
    case "contact":
      section = "contact";
      break;
    case "hire us":
      section = "hire-us";
      break;
    case "works":
      section = "works";
  }

  const li_elts = document.querySelectorAll(".main-content li");

  li_elts.forEach((li_elt) => {
    if (li_elt.classList.contains("is-visible")) {
      li_elt.classList.remove("is-visible");
    }

    if (li_elt.id == section) {
      setTimeout(function () {
        li_elt.classList.add("is-visible");
      }, 600);
    }
  });
}
