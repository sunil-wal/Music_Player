function validateAlbum(album) {
  let data = {};

  if (album.name.length === 0) {
    data.error = 'Album name is required';
  }

  return data;
}

export default validateAlbum;
