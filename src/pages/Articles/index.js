import Component from '@/core/Component';
import ArticleList from '@/components/ArticleList';

class ArticlesPage extends Component {
  didMount() {
    this.getArticleList();
  }

  didUpdate() {
    this.renderArticleList();
  }

  template() {
    return `
    <div class="container"></div>
    `;
  }

  getArticleList() {
    fetch('/dbs/articleList.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ list: data.articles });
      });
  }

  renderArticleList() {
    const container = this.target.querySelector('.container');

    new ArticleList(container, this.state);
  }
}

export default ArticlesPage;
