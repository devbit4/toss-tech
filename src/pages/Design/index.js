import Component from '@/core/Component';

import styles from './styles.module.css';

class DesignPage extends Component {
  template() {
    return `
    <div class=${styles.page__container}>
      <div class=${styles.page__inner}>
        <h3 class=${styles.page__title}>디자인</h3>
        <div class=${styles.design__list}>디자인 페이지입니다.</div>
      </div>
    </div>`;
  }
}

export default DesignPage;
