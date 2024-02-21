import { AxiosError } from 'axios';
import getArticles from '@/api/getArticles';
import Component from '@/core/Component';
import ArticleList from '@/components/ArticleList';
import { Article } from '@/types/article/types';

import styles from './styles.module.css';

interface State {
  articles: Article[];
}

interface ResponseData {
  articles: Article[];
}

class ArticlesPage extends Component<State, {}> {
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
    const onSuccess = ({ articles }: ResponseData) => {
      this.setState({ articles });
    };

    const onError = (err: AxiosError) => {
      console.log(err);
    };

    getArticles({ onSuccess, onError });
  }

  renderArticleList() {
    const $articleList = this.target.querySelector('.article-list');

    new ArticleList($articleList as HTMLElement, this.state);
  }
}

export default ArticlesPage;
