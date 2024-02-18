import { AxiosError } from 'axios';
import getArticles from '@/api/getArticles';
import Component from '@/core/Component';
import ArticleDetail from '@/components/ArticleDetail';
import { Article } from '@/types/article/types';

import styles from './styles.module.css';

interface ResponseData {
  articles: Article[];
}

interface State {
  article: Article;
}

interface Props {
  params: { id: string };
}

class ArticlePage extends Component<State, Props> {
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
    const id = Number(this.props.params.id);

    const onSuccess = ({ articles }: ResponseData) => {
      this.setState({ article: articles[id] });
    };

    const onError = (err: AxiosError) => {
      console.log(err);
    };

    getArticles({ onSuccess, onError });
  }

  renderArticle() {
    const $detailInner = this.target.querySelector('.detail__inner');

    new ArticleDetail($detailInner as HTMLElement, this.state);
  }
}

export default ArticlePage;
