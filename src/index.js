import ArticlePage from '@/pages/Article';
import ArticlesPage from '@/pages/Articles';
import DesignPage from '@/pages/Design';
import NotFoundPage from '@/pages/NotFound';
import Router from '@/router/index.js';

const root = document.querySelector('#app');

const router = new Router(root);

router
  .addRoute({ path: '/', page: ArticlesPage })
  .addRoute({ path: '/articles/:id', page: ArticlePage })
  .addRoute({ path: '/design', page: DesignPage })
  .addRoute({ path: '*', page: NotFoundPage })
  .start();
