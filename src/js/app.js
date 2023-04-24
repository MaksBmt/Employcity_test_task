import Select from './select.js';
import Range from './range.js';
import OpenMenu from "./openMenu.js";
import { correctMarginMain } from "./modules/functions.js"

if (document.querySelector('.nav') !== null) {
  const nav = document.querySelector('.nav');

  const toggleNav = new OpenMenu(nav, 'nav__button', 'nav--closed', 'nav--opened');
  toggleNav.toggle();
}

if (document.querySelector('.dropdown') !== null) {
  const boxSelect = document.querySelector('.dropdown');

  const select = new Select(boxSelect);
  select.init();
}

if (document.querySelector('.range') !== null) {
  const boxRange = document.querySelector('.range');
  const range = new Range(boxRange);
  range.init();
}

correctMarginMain();