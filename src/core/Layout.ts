import Component from './Component';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

interface Props {
  params: Record<string, string>;
  queryParams: Record<string, string>;
}

class Layout extends Component {
  constructor(
    target: HTMLElement,
    props: Props,
    pageComponent: typeof Component,
  ) {
    super(target, props);

    this.renderLayout(pageComponent);
  }

  template() {
    return `
      <div class="header"></div>
      <div class="content"></div>
      <div class="banner"></div>
      <footer></footer>
    `;
  }

  renderLayout = (PageComponent: typeof Component) => {
    const $header = this.target.querySelector('.header');
    const $content = this.target.querySelector('.content');
    const $banner = this.target.querySelector('.banner');
    const $footer = this.target.querySelector('footer');

    new Header($header as HTMLElement, {});
    new PageComponent($content as HTMLElement, this.props);
    new Banner($banner as HTMLElement, {});
    new Footer($footer as HTMLElement, {});
  };
}

export default Layout;
