import axios from './http.service';
export const getArtistAlbums = async (page = 1, searchText = '', artistid) => {
  console.log('inservice artist', artistid);
  let response = await axios({
    url: `artists/${artistid}/albums`,
    params: {
      page,
      searchText
    }
  });

  //console.log('service response', response.data.result.rows[0].albums);
  return response.data.result.rows[0].albums;
};
