
export const getArtists = async(query, setArtists) => {
  if(query) {
    const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`);
    const data = await res.json();
    setArtists(data.artists);
    console.log(data.artists);     
  }
};

