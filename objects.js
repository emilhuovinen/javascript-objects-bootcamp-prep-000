var playlist = {
  redHotChiliPeppers: "Snow",
  ladyGaga: "Pokerface"
};

var updatePlaylist = function (obj, artist, title) {
  return Object.assign({}, obj, { [artist]: title })
};

var removeFromPlaylist = function (artist) {
  delete playlist.artist;
  
  return playlist
}