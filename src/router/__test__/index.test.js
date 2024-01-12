const { default: Component } = require('../../core/Component');
const { default: Router } = require('..');
const { pathToRegex, getParams, getQueryParams } = require('../utils');

class Home extends Component {
  template() {
    return `<h3>home</h3>`;
  }
}

class Posts extends Component {
  template() {
    return `<h3>list</h3>`;
  }
}

class Post extends Component {
  template() {
    return `<h3>detail</h3>`;
  }
}

class NotFound extends Component {
  template() {
    return `<h3>404</h3>`;
  }
}

describe('router test', () => {
  const target = document.body;
  const router = new Router(target);

  beforeAll(() => {
    router
      .addRoute({
        path: '/',
        page: Home,
      })
      .addRoute({
        path: '/posts',
        page: Posts,
      })
      .addRoute({
        path: '/posts/:id',
        page: Post,
      })
      .addRoute({
        path: '*',
        page: NotFound,
      });
  });

  test('should verify that the addRoute function works properly', () => {
    expect(router.routes.length).toBe(4);
    expect(router.routes.length).not.toBe(3);
    expect(router.routes[0].path).toBe('/');
    expect(router.routes[0].path).not.toBe('/posts');
    expect(router.routes[0].path).not.toBe('/hello');
  });

  test('should verify that the pathToRegex function works properly', () => {
    const regex = pathToRegex('/posts');
    const regex2 = pathToRegex('/posts/:id');

    expect(regex.test('/posts')).toBeTruthy();
    expect(regex.test('/posts/3')).toBeFalsy();

    expect(regex2.test('/posts/3')).toBeTruthy();
    expect(regex2.test('/posts')).toBeFalsy();
  });

  test('should return correct params when the getParams function works properly', () => {
    const pathname = '/posts/1';
    const targetRoute = router._findRoute(pathname);

    expect(getParams(targetRoute)).toEqual({ id: '1' });
    expect(getParams(targetRoute).id).not.toBe(2);
    expect(getParams(targetRoute)).not.toEqual({ no: '1' });
  });

  test('should return correct queryParams when the getQueryParams function works properly', () => {
    const url = 'https://www.google.com?a=1&b=2';
    const url2 = 'https://www.google.com?a=1b=2';

    expect(getQueryParams(url)).toEqual({ a: '1', b: '2' });
    expect(getQueryParams(url)).not.toEqual({ a: '1', b: '3' });
    expect(getQueryParams(url2)).not.toEqual({ a: '1', b: '2' });
  });

  test('should verify that the findRoute function works properly', () => {
    let matchedRoutePah = router._findRoute('/posts/3').route.path;
    expect(matchedRoutePah).toBe('/posts/:id');
    expect(matchedRoutePah).not.toBe('*');

    matchedRoutePah = router._findRoute('/404').route.path;
    expect(matchedRoutePah).toBe('*');
    expect(matchedRoutePah).not.toBe('/posts/:id');

    matchedRoutePah = router._findRoute('/hello/3').route.path;
    expect(matchedRoutePah).toBe('*');
    expect(matchedRoutePah).not.toBe('/posts/:id');
  });

  test('should render the target page when the navigateTo function works properly', () => {
    router._navigateTo('/posts');

    expect(target.innerHTML).toContain('<h3>list</h3>');
    expect(target.innerHTML).not.toContain('<h3>detail</h3>');

    router._navigateTo('/hello');
    expect(target.innerHTML).not.toContain('<h3>list</h3>');
    expect(target.innerHTML).toContain('<h3>404</h3>');
  });
});
