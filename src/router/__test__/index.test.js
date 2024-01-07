/* eslint-disable no-undef */
const { findRoute } = require('../index');
const { pathToRegex, getParams, getQueryParams } = require('../utils');

const routes = [
  {
    path: '/',
    page: jest.fn().mockReturnValue('<div>main-page</div>'),
  },
  { path: '/posts', page: jest.fn().mockReturnValue('<div>list-page</div>') },
  {
    path: '/posts/:id',
    page: jest.fn().mockReturnValue('<div>detail-page</div>'),
  },
  { path: '*', page: jest.fn().mockReturnValue('<div>404-page</div>') },
];

describe('router test', () => {
  test('should verify that the pathToRegex function works properly', () => {
    expect(pathToRegex('/')).toEqual(/^\/$/);
    expect(pathToRegex('/posts/:id')).toEqual(/^\/posts\/(.+)$/);
    expect(pathToRegex('/posts')).toEqual(/^\/posts$/);

    expect(pathToRegex('/posts/:id')).not.toEqual(/^\/posts$/);
    expect(pathToRegex('/posts')).not.toEqual(/^\/posts\/(.+)$/);
  });

  test('should return correct params when the getParams function works properly', () => {
    const pathname = '/posts/1';

    const targetRoute = findRoute(routes, pathname);

    expect(getParams(targetRoute)).toEqual({ id: '1' });
    expect(getParams(targetRoute).id).not.toBe(2);
    expect(getParams(targetRoute)).not.toEqual({ no: '1' });
  });

  test('should return correct queryParams when the findRoute function works properly', () => {
    const search = '?a=1&b=2';

    expect(getQueryParams(search)).toEqual({ a: '1', b: '2' });
    expect(getQueryParams(search)).not.toEqual({ a: '1', b: '3' });
  });

  test('should verify that the findRoute function works properly', () => {
    let matchedRoutePah = findRoute(routes, '/').route.path;
    expect(matchedRoutePah).toBe('/');
    expect(matchedRoutePah).not.toBe('*');

    matchedRoutePah = findRoute(routes, '/posts/3').route.path;
    expect(matchedRoutePah).toBe('/posts/:id');
    expect(matchedRoutePah).not.toBe('*');

    matchedRoutePah = findRoute(routes, '/404').route.path;
    expect(matchedRoutePah).toBe('*');
    expect(matchedRoutePah).not.toBe('/posts/:id');

    matchedRoutePah = findRoute(routes, '/hello/3').route.path;
    expect(matchedRoutePah).toBe('*');
    expect(matchedRoutePah).not.toBe('/posts/:id');
  });

  test('should verify that the matchedRoutePage is rendered properly', () => {
    const matchedRoute = findRoute(routes, '/posts/3');

    const detailPageRoute = routes.find((route) => route.path === '/posts/:id');
    const listPageRoute = routes.find((route) => route.path === '/posts');
    const notFoundPageRoute = routes.find((route) => route.path === '*');

    document.body.innerHTML = matchedRoute.route.page();

    expect(detailPageRoute.page).toHaveBeenCalled();
    expect(listPageRoute.page).not.toHaveBeenCalled();
    expect(notFoundPageRoute.page).not.toHaveBeenCalled();

    expect(document.body.innerHTML).toContain(detailPageRoute.page());
    expect(document.body.innerHTML).not.toContain(listPageRoute.page());
    expect(document.body.innerHTML).not.toContain(notFoundPageRoute.page());
  });
});
