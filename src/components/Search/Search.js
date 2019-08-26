import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArtists } from '../../services/getArtistApi';


const Search = () => {


  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    getArtists(query, setArtists);
  }, [query]);
  
  //   FIXME: created in getArtistApi.js in services
  //   const getArtists = async() => {
  //     if(query) {
  //       const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`);
  //       const data = await res.json();
  //       setArtists(data.artists);
  //       console.log(data.artists);     
  //     }
  //   };

  
  const updateSearch = ({ target }) => {
    setSearch(target.value);
  };
  
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  
  return (
    <div>
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} placeholder="insert artist..."/>
        <button>Search</button>
      </form>
      {artists.map(artist => (
        <div key={artist.id}>
          <h1>
            <Link to={`/search/${artist.name}/${artist.id}`}>{artist.name}</Link>
          </h1>
          <h3>{artist.country}</h3>
        </div>
      ))}
    </div>
  );
};

export default Search;
