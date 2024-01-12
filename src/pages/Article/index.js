import Component from '@/core/Component';
import ArticleDetail from '@/components/ArticleDetail';

class ArticlePage extends Component {
  didMount() {
    this.getArticle();
  }

  didUpdate() {
    this.renderArticle();
  }

  template() {
    return `<div class="container"></div>`;
  }

  getArticle() {
    fetch('/dbs/articleList.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ item: data.articles[this.props.params.id] });
      });
  }

  renderArticle() {
    const container = this.target.querySelector('.container');

    new ArticleDetail(container, this.state);
  }
}

export default ArticlePage;
