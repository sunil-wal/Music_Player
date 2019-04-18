import axios from './http.service';

export const getTracks = async (offset = 0) => {
  let response = await axios({
    url: '/tracks',
    params: {
      offset
    }
  });

  return response.data.tracks;
};
