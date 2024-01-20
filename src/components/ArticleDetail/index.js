import Component from '@/core/Component';

import styles from './styles.module.css';

class ArticleDetail extends Component {
  template() {
    const { title, summary, thumbnail, date } = this.props.item;

    return `
      <div class=${styles.detail__box}>
        <img class=${styles.detail__img} src="${thumbnail}"/>
        <h3 class=${styles.detail__title}>${title}</h3>
        <p class=${styles.detail__summary}>${summary}</p>
        <p class=${styles.detail__date}>${date}</p>
      </div>
 `;
  }
}

export default ArticleDetail;
