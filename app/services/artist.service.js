import axios from './http.service';

export const getArtists = async (offset = 0) => {
  let response = await axios({
    url: '/artists',
    params: {
      offset
    }
  });

  return response.data.artists;
};
