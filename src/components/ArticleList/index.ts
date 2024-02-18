import Component from '@/core/Component';

import formatDate from '@/utils/date';
import { Article } from '@/types/article/types';

import styles from './styles.module.css';

interface Props {
  articles: Article[];
}

class ArticleList extends Component<{}, Props> {
  template() {
    return `
    <ul>
    ${this.props.articles
      .map(
        (article, index) =>
          `<li class=${styles.article__item}>
            <a href="/articles/${index}" data-link>
              <img src="${article.thumbnail}" alt="thumbnail" class=${
                styles.article__img
              }>
              <div class=${styles.article__item}>
                <h3 class=${styles.article__title}>${article.title}</h3>
                <p class=${styles.article__desc}>${article.summary}</p>
                <p class=${styles.article__date}>${formatDate(
                  article.date,
                  '.',
                )}</p>
              </div>
            </a>
          </li>`,
      )
      .join('')}
    </ul>
 `;
  }
}

export default ArticleList;
