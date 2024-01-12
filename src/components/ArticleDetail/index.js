import Component from '@/core/Component';

class ArticleDetail extends Component {
  template() {
    return `
    <div>
    ${this.props.item.id}번
    ${this.props.item.title}
    </div>
 `;
  }
}

export default ArticleDetail;
