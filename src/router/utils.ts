import { Route } from './index';

export const pathToRegex = (path: string) =>
  new RegExp(`^${path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)')}$`);

export const getParams = (target: {
  route: Route;
  matchedPathInfo: string[];
}) => {
  const keys = Array.from(target.route.path.matchAll(/:(\w+)/g)).map(
    (paramsInfo) => paramsInfo[1],
  );

  const values = target.matchedPathInfo.slice(1);

  return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
};

export const getQueryParams = (url: string | URL) => {
  const newUrl = new URL(url);

  const urlSearchParams = new URLSearchParams(newUrl.search);

  return Object.fromEntries(urlSearchParams.entries());
};
