// src/components/MovieSearch.js
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import useDebounce from "./useDebouce"
const MovieSearch = () => {
  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState(null);
  const [inputvalue , setInputvalue] = useState('');


  const fetchMovie = async (title) => {
    try {
      const response = await axios.get(`/api/search?title=${title}`);
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const debouncedFetchMovie = useDebounce(inputvalue,1000);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e)=>{
            setInputvalue(e.target.value)
        }}
        placeholder = "Search...."
      />

      {movie && (
        <div>
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
