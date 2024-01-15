import Component from '@/core/Component';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

class Page extends Component {
  constructor(target, props, routePage) {
    super(target, props);

    this.renderLayout(routePage);
  }

  template() {
    return `
      <header></header>
      <div class="content"></div>
      <div class="banner"></div>
      <footer></footer>
    `;
  }

  renderLayout(routePage) {
    const header = this.target.querySelector('header');
    const content = this.target.querySelector('.content');
    const banner = this.target.querySelector('.banner');
    const footer = this.target.querySelector('footer');

    new Header(header, {});
    new routePage(content, this.props);
    new Banner(banner, {});
    new Footer(footer, {});
  }
}

export default Page;
