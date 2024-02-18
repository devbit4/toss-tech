import _axios, { AxiosError } from 'axios';

interface AxiosParams<T = {}> {
  url: string;
  method?: string;
  data?: T;
  onSuccess(data: T): void;
  onError(err: AxiosError): void;
}

const axios = ({
  url,
  method = 'get',
  data = {},
  onSuccess,
  onError,
}: AxiosParams) => {
  return _axios({ method, url, data })
    .then((res) => onSuccess(res.data))
    .catch((err) => {
      onError?.(err);
    });
};

export default axios;
