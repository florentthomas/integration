const arrow_left_elt = document.getElementById("left-carousel");
const arrow_right_elt = document.getElementById("right-carousel");
const items_carousel = document.querySelectorAll("#carousel .item-carousel");
const container_carousel = document.querySelector(".items-carousel");

function slider(e) {
  let index_current_item = null;

  items_carousel.forEach((item, index) => {
    if (item.classList.contains("item-carousel-active")) {
      index_current_item = index;
    }
  });

  let next_item = items_carousel[index_current_item + 1];
  let previous_item = items_carousel[index_current_item - 1];

  if (index_current_item + 1 >= items_carousel.length) {
    next_item = items_carousel[0];
  }

  if (index_current_item - 1 < 0) {
    previous_item = items_carousel[items_carousel.length - 1];
  }

  container_carousel.style.opacity = "0";

  setTimeout(
    function () {
      next_item.classList.remove("item-left", "item-right");
      previous_item.classList.remove("item-left", "item-right");

      if (this.id == "right-carousel") {
        next_item.classList.add("item-carousel-active");

        items_carousel[index_current_item].classList.add("item-left");

        previous_item.classList.add("item-right");
      } else if (this.id == "left-carousel") {
        previous_item.classList.add("item-carousel-active");
        next_item.classList.add("item-left");

        items_carousel[index_current_item].classList.add("item-right");
      }

      items_carousel[index_current_item].classList.remove(
        "item-carousel-active"
      );

      container_carousel.style.opacity = "1";
    }.bind(this),
    1000
  );
}

arrow_left_elt.addEventListener("click", slider);
arrow_right_elt.addEventListener("click", slider);
