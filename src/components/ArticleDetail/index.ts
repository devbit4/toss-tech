import Component from '@/core/Component';
import { Article } from '@/types/article/types';
import formatDate from '@/utils/date';

import styles from './styles.module.css';

interface Props {
  article: Article;
}

class ArticleDetail extends Component<{}, Props> {
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
