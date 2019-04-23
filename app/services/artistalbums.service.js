import axios from './http.service';
export const getArtistAlbums = async (
  page = 1,
  searchText = '',
  artistid = 5
) => {
  console.log('checking service');
  let response = await axios({
    url: `artists/${artistid}/albums`,
    params: {
      page,
      searchText
    }
  });

  return response.data.result.rows[0].albums;
};
