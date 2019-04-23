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

export const addTrackToPlaylist = async (id, data) => {
  let response = await axios({
    method: 'put',
    url: `/playlists/${id}`,
    data: { trackIds: data }
  });

  return response.data;
};
