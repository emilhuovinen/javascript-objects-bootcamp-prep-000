var playlist = {
['Slowdive']: "Alison",
['My Bloody Valentine']: "Sometimes"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })

}

var removeFromPlaylist = function (playlist, artistName) {
  return delete playlist.artistName;
  
}

