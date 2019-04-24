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
export const getTracksByGenre = async genre => {
  let response = await axios({
    url: '/tracks',
    params: {
      genre
    }
  });

  return response.data.tracks;
};
export const getAlbumTracks = async id => {
  let response = await axios({
    url: `/albums/${id}/tracks`
  });
  const result = response.data.result.albumTracks.map(data => data.id);
  return result;
};
export const getTracksByPlaylistId = async id => {
  let response = await axios({
    url: `/playlists/${id}`
  });

  return response.data.result[0].playlistTracks;
};
export const getTrackReport = async () => {
  let response = await axios({
    url: `tracks/report`
  });

  return response.data.result;
};
