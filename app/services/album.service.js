import axios from './http.service';

export const getAlbum = async (page = 1, searchText = '') => {
  let response = await axios({
    url: '/albums',
    params: {
      page,
      searchText
    }
  });

  return response.data.result;
};
