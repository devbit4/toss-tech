import axios from 'axios';

export default async function getArticleList() {
  const res = await axios('/dbs/articleList.json');

  const data = await res.data;

  return data.articles;
}
