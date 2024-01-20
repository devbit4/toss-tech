import Component from '@/core/Component';
import ArticleDetail from '@/components/ArticleDetail';

import getArticle from '@/api/getArticle';

class ArticlePage extends Component {
  didMount() {
    this.fetchArticle();
  }

  didUpdate() {
    this.renderArticle();
  }

  template() {
    return `<div class="page__container"></div>`;
  }

  async fetchArticle() {
    const { id } = this.props.params;

    const article = await getArticle(id);

    this.setState({ item: article });
  }

  renderArticle() {
    const container = this.target.querySelector('.page__container');

    new ArticleDetail(container, this.state);
  }
}

export default ArticlePage;
