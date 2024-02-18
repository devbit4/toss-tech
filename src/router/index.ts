import Component from '@/core/Component';
import Layout from '@/core/Layout';
import { pathToRegex, getParams, getQueryParams } from './utils';

export interface Route {
  path: string;
  page: typeof Component;
}

class Router {
  routes: Route[];

  target: HTMLElement;

  constructor(target: HTMLElement) {
    this.routes = [];
    this.target = target;
  }

  addRoute(route: Route) {
    this.routes.push(route);
    return this;
  }

  findRoute(pathname: string) {
    const allRoutes = this.routes.map((route) => ({
      route,
      matchedPathInfo:
        route.path === '*'
          ? [pathname]
          : (pathname.match(pathToRegex(route.path)) as string[]),
    }));

    return allRoutes.find((route) => route.matchedPathInfo !== null);
  }

  renderRoute() {
    const targetRoute = this.findRoute(location.pathname);

    if (!targetRoute) return;

    const props = {
      params: getParams(targetRoute),
      queryParams: getQueryParams(location.href),
    };

    new Layout(this.target, props, targetRoute.route.page);
  }

  navigateTo(url: string) {
    history.pushState(null, '', url);
    this.renderRoute();
  }

  start() {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e) => {
        const target = e.target as HTMLAnchorElement;

        if (target && target.matches('[data-link]')) {
          e.preventDefault();
          this.navigateTo(target.href);
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
