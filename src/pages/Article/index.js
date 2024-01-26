import Component from '@/core/Component';
import ArticleDetail from '@/components/ArticleDetail';

import getArticles from '@/api/getArticles';

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

    const onSuccess = ({ articles }) => {
      this.setState({ article: articles[id] });
    };

    const onError = (err) => {
      console.log(err);
    };

    getArticles({ onSuccess, onError });
  }

  renderArticle() {
    const $detailInner = this.target.querySelector('.detail__inner');

    new ArticleDetail($detailInner, this.state);
  }
}

export default ArticlePage;
