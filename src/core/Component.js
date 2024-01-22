class Component {
  target;

  state;

  props;

  constructor(target, props) {
    this.target = target;
    this.state = {};
    this.props = props;

    this.setup();
    this.mount();
    this.setEvent();
  }

  setup() {}

  template() {}

  render() {
    const template = this.template();
    if (!template) return;
    this.target.innerHTML = template;
  }

  mount() {
    this.render();
    this.didMount();
  }

  update() {
    this.render();
    this.didUpdate();
  }

  didMount() {}

  didUpdate() {}

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };

    this.update();
  }

  addEvent(eventType, selector, callback) {
    const children = Array.from(this.target.querySelectorAll(selector));

    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
      return true;
    });
  }
}

export default Component;
