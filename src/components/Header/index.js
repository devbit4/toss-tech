import Component from '@/core/Component';

import styles from './styles.module.css';

class Header extends Component {
  template() {
    return `
    <header>
        <div class=${styles.header__container}>
        <div class=${styles.header__wrapper}>
                <div class=${styles.header__inner}>
                <div class="header__logo">
                    <div class=${styles.logo}>
                        <a href="/" data-link>
                            <img src="/img/logo.png" />
                        </a>
                    </div>
                </div>
                <div class="header__nav">
                    <ul class=${styles.nav__list}>
                        <li class=${styles.nav__item}><a href="/design" data-link>디자인</a></li>
                        <li class=${styles.nav__item}><a href="/" data-link>개발</a></li>
                        <li class=${styles.nav__item}><button>채용 바로가기</button></li>
                    </ul>
                </div>
                </div>
        </div>
        </div>
    </header>
    `;
  }
}

export default Header;
