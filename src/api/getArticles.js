import axios from 'axios';

export default async function getArticles() {
  const res = await axios('/dbs/articleList.json');

  const data = await res.data;

  return data.articles;
}
