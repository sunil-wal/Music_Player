import axios from './http.service';

export const getArtists = async (page = 1, searchText = '') => {
  let response = await axios({
    url: '/artists',
    params: {
      page,
      searchText
    }
  });

  return response.data.artists;
};
