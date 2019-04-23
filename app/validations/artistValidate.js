function validateArtist(artist) {
  let data = {};

  if (artist.name.length === 0) {
    data.error = 'Aritst name is required';
  }

  return data;
}

export default validateArtist;
