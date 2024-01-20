import Component from '@/core/Component';

import styles from './styles.module.css';

class ArticleList extends Component {
  template() {
    return `
    <ul>
    ${this.props.list
      .map(
        (item, index) =>
          `<li class=${styles.article__item}>
            <a href="/articles/${index}" data-link>
              <img src="${item.thumbnail}" alt="thumbnail" class=${styles.article__img}>
              <div class=${styles.article__item}>
                <h3 class=${styles.article__title}>${item.title}</h3>
                <p class=${styles.article__desc}>${item.summary}</p>
                <p class=${styles.article__date}>${item.date}</p>
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
