import axios from './http.service';

export const getTracks = async (page = 1, searchText = '') => {
  let response = await axios({
    url: '/tracks',
    params: {
      page,
      searchText
    }
  });

  return response.data.tracks;
};
