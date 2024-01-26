import Component from '@/core/Component';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

class Layout extends Component {
  constructor(target, props, pageComponent) {
    super(target, props);

    this.render(pageComponent);
  }

  template() {
    return `
      <div class="header"></div>
      <div class="content"></div>
      <div class="banner"></div>
      <footer></footer>
    `;
  }

  render = (PageComponent) => {
    const $header = this.target.querySelector('.header');
    const $content = this.target.querySelector('.content');
    const $banner = this.target.querySelector('.banner');
    const $footer = this.target.querySelector('footer');

    new Header($header, {});
    new PageComponent($content, this.props);
    new Banner($banner, {});
    new Footer($footer, {});
  };
}

export default Layout;
