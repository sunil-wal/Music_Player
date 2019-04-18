import axios from './http.service';

export const getArtists = async () => {
  let response = await axios({
    url: '/artists'
  });

  return response.data.artists;
};
