import axios from './http.service';
export const getAlbumTrack = async (page = 1, searchText = '', albumid) => {
  console.log('inservice album', albumid);
  let response = await axios({
    url: `/albums/${albumid}/tracks`,
    params: {
      page,
      searchText
    }
  });
  return response.data.result[0].albumTracks;
};
