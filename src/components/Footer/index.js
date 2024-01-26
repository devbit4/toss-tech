import Component from '@/core/Component';

import styles from './styles.module.css';

class Footer extends Component {
  template() {
    return `
      <div class=${styles.footer__container}>
        <div class=${styles.footer__inner}>
          <div class=${styles.footer__list}>
            <div class=${styles.footer__item}>
              <div class=${styles.footer__title}>토스테크</div>
              <div class=${styles.footer__subTitle}>
                <ul>
                  <li><span>의견 보내기</span></li>
                </ul>
              </div>
            </div>
            <div class=${styles.footer__item}>
              <div class=${styles.footer__title}>토스</div>
              <div class=${styles.footer__subTitle}>
                <ul>
                  <li><span>홈페이지</span></li>
                  <li><span>회사 소개</span></li>
                  <li><span>채용</span></li>
                </ul>
              </div>
            </div>
            <div class=${styles.footer__item}>
              <div class=${styles.footer__title}>고객센터</div>
              <div class=${styles.footer__subTitle}>
                <ul>
                  <li><span>전화: 1599-4905(24시간 연중무휴)</span></li>
                  <li><span>이메일: support@toss.im</span></li>
                  <li><span>카카오톡: @toss</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class=${styles.footer__company}>
            <span>(주)비바리퍼블리카</span>
          </div>
          <div class=${styles.footer__copyright}>
            <span>Copyright © Viva Republica, Inc. All Rights Reserved.</span>
          </div>
          <div class=${styles.footer__socialList}>
            <li class=${styles.footer__socialItem}>
              <a>
              <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="Toss Facebook">
              </a>
            </li>
            <li class=${styles.footer__socialItem}>
              <a>
              <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="Toss Facebook">
              </a>
            </li>      
          </div>
        </div>
      </div>
    `;
  }
}

export default Footer;
