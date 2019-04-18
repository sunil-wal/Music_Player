import axios from './http.service';

export const getTracks = async () => {
  let response = await axios({
    url: '/tracks'
  });

  return response.data.tracks;
};
