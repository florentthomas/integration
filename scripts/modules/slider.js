import {slider} from "../functions/slider.js";

const arrow_left_elt = document.getElementById("left-carousel");
const arrow_right_elt = document.getElementById("right-carousel");

arrow_left_elt.addEventListener("click", slider);
arrow_right_elt.addEventListener("click", slider);
