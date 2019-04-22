import axios from './http.service';

export const getPlaylists = async (page = 1, searchText = '') => {
  let response = await axios({
    url: '/playlists',
    params: {
      page,
      searchText
    }
  });

  return response.data.result;
};
