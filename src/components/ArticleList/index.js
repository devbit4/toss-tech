import Component from '@/core/Component';

class ArticleList extends Component {
  template() {
    return `
    <ul>
    ${this.props.list
      .map(
        (item, index) =>
          `<li><a href="/articles/${index}" data-link>${item.id}번 ${item.title}아티클</a></li>`,
      )
      .join('')}
    </ul>
 `;
  }
}

export default ArticleList;
