export default class Range {
  constructor(box) {
    this.box = box;
    this.input = this.box.querySelector('input');
    this.textValue = this.box.querySelector('.range__text');
    this.rangeInputHandler = this.rangeInputHandler.bind(this);
  }

  init() {
    this.input.addEventListener('input', this.rangeInputHandler);
  }

  rangeInputHandler() {
    this.textValue.textContent = this.input.value;
  }
}