import _axios from 'axios';

const axios = ({ method, url, data, onSuccess, onError }) => {
  return _axios({ method, url, data })
    .then((res) => onSuccess(res.data))
    .catch((err) => {
      onError?.(err);
    });
};

export default axios;
