class Component<S = {}, P = {}> {
  target;

  state;

  props;

  constructor(target: HTMLElement, props: P) {
    this.target = target;
    this.state = {} as S;
    this.props = props;

    this.setup();
    this.mount();
    this.setEvent();
  }

  setup() {}

  template(): string | void {}

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

  setState(newState: Partial<S>) {
    this.state = { ...this.state, ...newState };

    this.update();
  }

  addEvent(eventType: string, selector: string, callback: (e: Event) => void) {
    const children = Array.from(this.target.querySelectorAll(selector));

    const isTarget = (target: HTMLElement) =>
      children.includes(target) || target.closest(selector);

    this.target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target as HTMLElement)) return false;
      callback(event);
      return true;
    });
  }
}

export default Component;
