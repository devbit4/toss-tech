const {
  default: Component,
  StateType,
  PropsType,
} = require('@/core/Component');
const { default: Router } = require('..');
const { pathToRegex, getParams, getQueryParams } = require('../utils');

// 실제 페이지 컴포넌트 import
const { default: ArticlesPage } = require('@/pages/Articles');
const { default: DesignPage } = require('@/pages/Design');
const { default: NotFoundPage } = require('@/pages/NotFound');

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

describe('임시 라우터 기능 테스트', () => {
  const target = document.body;
  const router = new Router(target);

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

  describe('4개의 테스트 라우트를 생성하고', () => {
    describe('addRoute 기능 테스트', () => {
      test('생성된 라우터의 갯수가 4인지 확인', () => {
        expect(router.routes.length).toBe(4);
      });

      test('생성된 라우터의 갯수가 3이 아닌지 확인', () => {
        expect(router.routes.length).not.toBe(3);
      });
    });

    describe('pathToRegex 테스트', () => {
      const regex = pathToRegex('/posts');
      const regex2 = pathToRegex('/posts/:id');

      test('/posts 정규표현식 테스트', () => {
        expect(regex.test('/posts')).toBeTruthy();
        expect(regex.test('/posts/3')).toBeFalsy();
      });

      test('/posts/:id 정규표현식 테스트', () => {
        expect(regex2.test('/posts/3')).toBeTruthy();
        expect(regex2.test('/posts')).toBeFalsy();
      });
    });

    describe('getParams 기능 테스트', () => {
      const pathname = '/posts/1';
      test('id가 1인지 확인', () => {
        const targetRoute = router.findRoute(pathname);

        expect(getParams(targetRoute)).toEqual({ id: '1' });
      });
      test('id가 2가 아닌지 확인', () => {
        const targetRoute = router.findRoute(pathname);

        expect(getParams(targetRoute).id).not.toBe({ id: '2' });
      });
      test('params 가 id 인지 확인', () => {
        const targetRoute = router.findRoute(pathname);

        expect(getParams(targetRoute)).not.toEqual({ no: '1' });
      });
    });

    describe('getQueryParams 기능 테스트', () => {
      const url = 'https://www.google.com?a=1&b=2';
      const url2 = 'https://www.google.com?a=1b=2';

      test('url의 query가 {a:"1",b:"2"} 확인', () => {
        expect(getQueryParams(url)).toEqual({ a: '1', b: '2' });
      });

      test('url의 query가 {a:"1",b:"3"} 아닌지 확인', () => {
        expect(getQueryParams(url)).not.toEqual({ a: '1', b: '3' });
      });

      test('url2의 query가 url의 query와 다른지 확인', () => {
        expect(getQueryParams(url2)).not.toEqual({ a: '1', b: '2' });
      });
    });

    describe('findRoute 기능 테스트', () => {
      test('/posts/3에 매칭되는 라우트가 /posts/:id인지 확인', () => {
        const matchedRoutePah = router.findRoute('/posts/3').route.path;
        expect(matchedRoutePah).toBe('/posts/:id');
        expect(matchedRoutePah).not.toBe('*');
      });

      test('/404에 매칭되는 라우트가 /404인지 확인', () => {
        const matchedRoutePah = router.findRoute('/404').route.path;
        expect(matchedRoutePah).toBe('*');
        expect(matchedRoutePah).not.toBe('/posts/:id');
      });

      test('/hello/3에 매칭되는 라우트가 *인지 확인', () => {
        const matchedRoutePah = router.findRoute('/hello/3').route.path;
        expect(matchedRoutePah).toBe('*');
        expect(matchedRoutePah).not.toBe('/posts/:id');
      });
    });

    describe('navigateTo 및 renderRoute 기능 테스트', () => {
      test('/posts 이동 시 list 페이지 랜더링', () => {
        router.navigateTo('/posts');

        expect(target.innerHTML).toContain('<h3>list</h3>');
      });

      test('/posts 이동 시 detail 페이지 비랜더링', () => {
        router.navigateTo('/posts');

        expect(target.innerHTML).not.toContain('<h3>detail</h3>');
      });

      test('/hello 이동 시 404 페이지 비랜더링', () => {
        router.navigateTo('/hello');

        expect(target.innerHTML).toContain('<h3>404</h3>');
      });

      test('/hello(404) 이동 시 list 페이지 비랜더링', () => {
        router.navigateTo('/hello');

        expect(target.innerHTML).not.toContain('<h3>list</h3>');
      });
    });
  });
});

describe('실제 페이지 라우터 기능 테스트', () => {
  const target = document.body;
  const router = new Router(target);

  router
    .addRoute({
      path: '/',
      page: ArticlesPage,
    })
    .addRoute({
      path: '/design',
      page: DesignPage,
    })
    .addRoute({
      path: '*',
      page: NotFoundPage,
    });

  describe('3개의 라우트를 생성하고', () => {
    describe('navigateTo 및 renderRoute 기능 테스트', () => {
      test('/ 이동 시 개발 페이지 랜더링', () => {
        router.navigateTo('/');

        expect(target.innerHTML).toContain('개발');
      });

      test('/design 이동 시 개발 페이지 비랜더링', () => {
        router.navigateTo('/design');

        expect(target.innerHTML).not.toContain('<h3>개발</h3>');
      });

      test('/design 이동 시 디자인 페이지 랜더링', () => {
        router.navigateTo('/design');

        expect(target.innerHTML).not.toContain('<h3>디자인</h3>');
      });

      test('/hello(404) 이동 시 디자인 페이지 비랜더링', () => {
        router.navigateTo('/hello');

        expect(target.innerHTML).not.toContain('<h3>디자인</h3>');
      });

      test('/hello(404) 이동 시 404 페이지 랜더링', () => {
        router.navigateTo('/hello');

        expect(target.innerHTML).toContain('이 페이지를 찾을 수 없습니다.');
      });
    });
  });
});
