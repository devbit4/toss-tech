import axios from '@/utils/axios';

export default function getArticles({ onSuccess, onError }) {
  return axios({
    url: '/dbs/articleList.json',
    onSuccess,
    onError,
  });
}
