import Component from '@/core/Component';

import formatDate from '@/utils/date';

import styles from './styles.module.css';

class ArticleDetail extends Component {
  template() {
    const { title, summary, thumbnail, date } = this.props.article;

    return `
      <div class=${styles.detail__box}>
        <img class=${styles.detail__img} src="${thumbnail}"/>
        <div class=${styles.detail__text}>
          <h3 class=${styles.detail__title}>${title}</h3>
          <p class=${styles.detail__summary}>${summary}</p>
          <p class=${styles.detail__date}>${formatDate(date, '.')}</p>
        </div>
      </div>
 `;
  }
}

export default ArticleDetail;
