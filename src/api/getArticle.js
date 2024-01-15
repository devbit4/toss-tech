export default async function getArticle(id) {
  const res = await fetch('/dbs/articleList.json');

  const data = await res.json();

  return data.articles[id];
}
