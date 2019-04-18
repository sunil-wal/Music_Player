import axios from './http.service';

export const getAlbum = async () => {
  let response = await axios({
    url: '/albums'
  });

  return response.data.result;
};
