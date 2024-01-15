import Component from '@/core/Component';
import ArticleList from '@/components/ArticleList';

import getArticleList from '@/api/getArticleList';

class ArticlesPage extends Component {
  didMount() {
    this.fetchArticleList();
  }

  didUpdate() {
    this.renderArticleList();
  }

  template() {
    return `
    <div class="page__container">
      <div class="page__inner">
        <h3 class="page__title">개발</h3>
        <div class="article-list"></div>
      </div>
    </div>`;
  }

  async fetchArticleList() {
    const list = await getArticleList();

    this.setState({ list });
  }

  renderArticleList() {
    const articleList = this.target.querySelector('.article-list');
    new ArticleList(articleList, this.state);
  }
}

export default ArticlesPage;
