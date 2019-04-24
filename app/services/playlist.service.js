import axios from './http.service';
let user = JSON.parse(localStorage.getItem('user'));
let userId;
if (user && user.id) {
  userId = user.id;
}
export const getPlaylists = async () => {
  let response = await axios({
    url: `users/${userId}/playlists`
  });
  const result = {
    rows: response.data.result[0].userPlaylists
  };
  return result;
};

export const addTrackToPlaylist = async (id, data) => {
  let response = await axios({
    method: 'put',
    url: `/playlists/${id}`,
    data: { trackIds: data }
  });

  return response.data;
};
