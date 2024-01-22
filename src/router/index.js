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

  findRoute(pathname) {
    const allRoutes = this.routes.map((route) => ({
      route,
      matchedPathInfo:
        route.path === '*'
          ? [pathname]
          : pathname.match(pathToRegex(route.path)),
    }));

    return allRoutes.find((route) => route.matchedPathInfo !== null);
  }

  renderRoute() {
    const targetRoute = this.findRoute(location.pathname);

    const props = {
      params: getParams(targetRoute),
      queryParams: getQueryParams(location),
    };

    new Page(this.target, props, targetRoute.route.page);
  }

  navigateTo(url) {
    history.pushState(null, null, url);
    this.renderRoute();
  }

  start() {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
          e.preventDefault();
          this.navigateTo(e.target.href);
          scrollTo(0, 0);
        }
      });

      this.renderRoute();
    });

    window.addEventListener('popstate', () => {
      this.renderRoute();
    });
  }
}

export default Router;
