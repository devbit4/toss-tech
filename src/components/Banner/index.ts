import Component from '@/core/Component';

import styles from './styles.module.css';

class Banner extends Component {
  template() {
    return `
        <div class=${styles.banner__container}>
            <div class=${styles.banner__inner}>
                <div class=${styles.banner__img}>
                    <img src="https://static.toss.im/3d/website_code_blue_alpha.png"/>
                </div>
                <div class="banner__box">
                    <div class=${styles.banner__title}>
                    <span>토스팀이 만드는 수많은 혁신의 순간들</span>
                    </div>
                    <div class=${styles.banner__desc}>
                    <span
                        >당신과 함께 만들고 싶습니다.<br />지금, 토스팀에
                        합류하세요.</span
                    >
                    </div>
                    <button class=${styles.banner__btn}>채용 중인 공고 보기</div>
                </div>
            </div>
        </div>
    `;
  }
}

export default Banner;
