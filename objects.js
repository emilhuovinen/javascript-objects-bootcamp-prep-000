var playlist = {
  redHotChiliPeppers: "Snow",
  ladyGaga: "Pokerface"
};

var updatePlaylist = function (playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
};

var removeFromPlaylist = function (artist) {
  delete playlist.artist;
  
  return playlist
}