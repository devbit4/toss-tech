import Component from '@/core/Component';

import styles from './styles.module.css';

class NotFoundPage extends Component {
  template() {
    return `
    <div class=${styles.page__container}>
      <div class=${styles.page__inner}>
        <h3 class=${styles.page__title}>404</h3>
        <div class=${styles.text}>이 페이지를 찾을 수 없습니다.</div>
      </div>
    </div>`;
  }
}

export default NotFoundPage;
