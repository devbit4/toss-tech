import Component from '@/core/Component';
import ArticleDetail from '@/components/ArticleDetail';

import tryCatch from '@/api/tryCatch';
import getArticle from '@/api/getArticle';

import styles from './styles.module.css';

class ArticlePage extends Component {
  didMount() {
    this.fetchArticle();
  }

  didUpdate() {
    this.renderArticle();
  }

  template() {
    return `
      <div class=${styles.detail__container}>
        <div class="detail__inner ${styles.detail__inner}">
        </div>
      </div>

    `;
  }

  async fetchArticle() {
    const { id } = this.props.params;

    tryCatch(
      async () => {
        const article = await getArticle(id);

        this.setState({ item: article });
      },
      (err) => {
        console.log(err);
      },
    );
  }

  renderArticle() {
    const $detailInner = this.target.querySelector('.detail__inner');

    new ArticleDetail($detailInner, this.state);
  }
}

export default ArticlePage;
