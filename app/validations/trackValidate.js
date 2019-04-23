function validateTrack(track) {
  let data = { error: {} };

  if (track.name.length === 0) {
    data.error.name = 'Track name is required';
  }

  if (track.minutes.length === 0) {
    data.error.minutes = 'Minutes is required';
  }

  return data;
}

export default validateTrack;
