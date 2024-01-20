import Page from '@/core/Page';
import { pathToRegex, getParams, getQueryParams } from './utils';

class Router {
  constructor(target) {
    this.routes = [];
    this.target = target;
  }

  addRoute(route) {
    this.routes.push(route);
    return this;
  }

  _findRoute(pathname) {
    const allRoutes = this.routes.map((route) => ({
      route,
      matchedPathInfo:
        route.path === '*'
          ? [pathname]
          : pathname.match(pathToRegex(route.path)),
    }));

    return allRoutes.find((route) => route.matchedPathInfo !== null);
  }

  _renderRoute() {
    const targetRoute = this._findRoute(location.pathname);

    const props = {
      params: getParams(targetRoute),
      queryParams: getQueryParams(location),
    };

    new Page(this.target, props, targetRoute.route.page);
  }

  _navigateTo(url) {
    history.pushState(null, null, url);
    this._renderRoute();
  }

  start() {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
          e.preventDefault();
          this._navigateTo(e.target.href);
          scrollTo(0, 0);
        }
      });

      this._renderRoute();
    });

    window.addEventListener('popstate', () => {
      this._renderRoute();
    });
  }
}

export default Router;
