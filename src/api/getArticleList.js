export default async function getArticleList() {
  const res = await fetch('/dbs/articleList.json');

  const data = await res.json();

  return data.articles;
}
