import Component from '@/core/Component';
import './reset.css';
import './index.css';

import ArticlePage from '@/pages/Article';
import ArticlesPage from '@/pages/Articles';
import DesignPage from '@/pages/Design';
import NotFoundPage from '@/pages/NotFound';
import Router from '@/router';

const target = document.querySelector('#app') as HTMLElement;

const router = new Router(target);

router
  .addRoute({ path: '/', page: ArticlesPage as typeof Component })
  .addRoute({ path: '/articles/:id', page: ArticlePage as typeof Component })
  .addRoute({ path: '/design', page: DesignPage as typeof Component })
  .addRoute({ path: '*', page: NotFoundPage as typeof Component })
  .start();
