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

export const getArtistReport = async () => {
  let response = await axios({
    url: `artists/report`
  });

  return response.data.result;
};
