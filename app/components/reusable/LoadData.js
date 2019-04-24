import { ARTIST, ALBUM, TRACK } from '../../constants';
import { getAlbum, getArtists, getTracks } from '../../services';
export const getAllData = {
  get loadAlbum() {
    return async (searchText, dispatch) => {
      console.log(searchText);
      try {
        let album = await getAlbum(1, searchText);
        dispatch({ type: ALBUM.SUCCESS, album });
      } catch (error) {
        dispatch({ type: ALBUM.ERROR, message: error.message });
      }
    };
  },
  get loadArtists() {
    return async (searchText, dispatch) => {
      try {
        let artist = await getArtists(1, searchText);
        dispatch({ type: ARTIST.SUCCESS, artist });
      } catch (error) {
        dispatch({ type: ARTIST.ERROR, message: error.message });
      }
    };
  },
  get loadTracks() {
    return async (searchText, dispatch) => {
      try {
        let track = await getTracks(1, searchText);
        dispatch({ type: TRACK.SUCCESS, track });
      } catch (error) {
        dispatch({ type: TRACK.ERROR, message: error.message });
      }
    };
  }
};
