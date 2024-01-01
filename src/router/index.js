import { pathToRegex, getParams } from './utils';

import articlesPage from '@/pages/articles.js';
import articlePage from '@/pages/article.js';
import designPage from '@/pages/design.js';
import notFoundPage from '@/pages/not-found';

const routes = [
  { path: '/', page: articlesPage },
  { path: '/articles/:id', page: articlePage },
  { path: '/design', page: designPage },
];

const renderRoute = async () => {
  const potentialTargets = routes.map((route) => ({
    route,
    result: location.pathname.match(pathToRegex(route.path)),
  }));

  const target = potentialTargets.find(
    (potentialMatch) => potentialMatch.result !== null,
  ) ?? {
    route: { path: '/not-found', page: notFoundPage },
    result: [location.pathname],
  };

  document.querySelector('#app').innerHTML = target.route.page(
    getParams(target),
  );
};

const changeRoute = (url) => {
  history.pushState(null, null, url);
  renderRoute();
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      changeRoute(e.target.href);
    }
  });

  renderRoute();
});

window.addEventListener('popstate', renderRoute);
