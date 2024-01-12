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

  setState(newState) {
    this.state = { ...this.state, ...newState };

    this.update();
  }
}

export default Component;
