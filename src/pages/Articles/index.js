import Component from '@/core/Component';
import ArticleList from '@/components/ArticleList';

import getArticles from '@/api/getArticles';

import styles from './styles.module.css';

class ArticlesPage extends Component {
  didMount() {
    this.fetchArticles();
  }

  didUpdate() {
    this.renderArticleList();
  }

  template() {
    return `
    <div class=${styles.page__container}>
      <div class=${styles.page__inner}>
        <h3 class=${styles.page__title}>개발</h3>
        <div class="article-list"></div>
      </div>
    </div>`;
  }

  fetchArticles() {
    const onSuccess = ({ articles }) => {
      this.setState({ articles });
    };

    const onError = (err) => {
      console.log(err);
    };

    getArticles({ onSuccess, onError });
  }

  renderArticleList() {
    const $articleList = this.target.querySelector('.article-list');

    new ArticleList($articleList, this.state);
  }
}

export default ArticlesPage;
