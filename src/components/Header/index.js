import Component from '@/core/Component';

import styles from './styles.module.css';

class Header extends Component {
  setup() {
    this.state = { open: false };
  }

  didUpdate() {
    console.log(this.state);
  }

  template() {
    return `
    <header>
        <div class=${styles.header__container}>
            <div class=${styles.header__wrapper}>
                <div class=${styles.header__inner}>
                    <div class=${styles.header__logo}>
                        <div class=${styles.logo}>
                            <a href="/" data-link>
                                <img src="/img/logo.png" />
                            </a>
                        </div>
                        <div class=${styles.header__btn}>${
                          this.state.open
                            ? '<img src="/img/icons/x-solid.svg" width="16px">'
                            : '<img src="/img/icons/bars-solid.svg" width="20px">'
                        }</div>
                    </div>

                    <div class=${
                      this.state.open
                        ? `${styles.opend__nav}`
                        : `${styles.closed__nav}`
                    }>
                        <ul class=${styles.nav__list}>
                            <li class=${
                              styles.nav__item
                            }><a href="/design" data-link>디자인</a></li>
                            <li class=${
                              styles.nav__item
                            }><a href="/" data-link>개발</a></li>
                            <li class=${
                              styles.nav__item
                            }><button>채용 바로가기</button></li>
                        </ul>
                    </div>         
                </div>
            </div>
        </div>
    </header>
    `;
  }

  setEvent() {
    this.addEvent('click', `.${styles.header__btn}`, () => {
      this.setState({ open: !this.state.open });
    });
  }
}

export default Header;
