import { AxiosError } from 'axios';
import axios from '@/utils/axios';
import { Article } from '@/types/article/types';

interface ArticlesData {
  articles: Article[];
}

interface Props {
  onSuccess(data: ArticlesData): void;
  onError(err: AxiosError): void;
}

export default function getArticles({ onSuccess, onError }: Props) {
  return axios({
    url: '/dbs/articleList.json',
    onSuccess,
    onError,
  });
}
