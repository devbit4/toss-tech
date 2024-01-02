export const pathToRegex = (path) =>
  new RegExp(`^${path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)')}$`);

export const getParams = (match) => {
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1],
  );
  const values = match.result.slice(1);

  return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
};

export const getQueryParams = (search) => {
  const urlSearchParams = new URLSearchParams(search);

  return Object.fromEntries(urlSearchParams.entries());
};
