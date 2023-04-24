export default class Select {
  constructor(box) {
    this.box = box;
    this.options = this.box.querySelectorAll('.dropdown__item');

    this.inputClickHandler = this.inputClickHandler.bind(this);
    this.optionClickHandler = this.optionClickHandler.bind(this);
  }

  init() {
    this.box.querySelector('.dropdown__wrap-input').addEventListener('click', this.inputClickHandler);
  
    Array.from(this.options).forEach((option) => {
      option.addEventListener('click', this.optionClickHandler);
    });

  }

  openListSelect() {
    this.box.classList.toggle('dropdown--active');
  }

  clearClassActive() {
    Array.from(this.options).find((option) => option.classList.contains('dropdown__item--activ')).classList.remove('dropdown__item--activ');
  }

  inputClickHandler() {
    this.openListSelect();
  }

  optionClickHandler(evt) {
    this.box.querySelector('.dropdown__input').value = evt.target.textContent;
    this.openListSelect();
    this.clearClassActive();
    evt.target.classList.add('dropdown__item--activ');
  }
}