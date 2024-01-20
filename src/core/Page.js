import Component from '@/core/Component';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

class Page extends Component {
  constructor(target, props, page) {
    super(target, props);

    this.renderLayout(page);
  }

  template() {
    return `
      <div class="header"></div>
      <div class="content"></div>
      <div class="banner"></div>
      <footer></footer>
    `;
  }

  renderLayout(page) {
    const header = this.target.querySelector('.header');
    const content = this.target.querySelector('.content');
    const banner = this.target.querySelector('.banner');
    const footer = this.target.querySelector('footer');

    new Header(header, {});
    new page(content, this.props);
    new Banner(banner, {});
    new Footer(footer, {});
  }
}

export default Page;
