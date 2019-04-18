import axios from './http.service';

export const getAlbum = async (offset = 0) => {
  let response = await axios({
    url: '/albums',
    params: {
      offset
    }
  });

  return response.data.result;
};
