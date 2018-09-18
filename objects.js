var playlist = {
['Slowdive']: "Alison",
['My Bloody Valentine']: "Sometimes"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })

}

var removeFromPlaylist = function (artist) {
  delete playlist.artist;
  
  return playlist
}

