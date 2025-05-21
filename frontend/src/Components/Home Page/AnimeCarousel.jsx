import React, { useState, useEffect } from "react";
import axios from "axios";

const AnimeCarousel = () => {
  const [anime, setAnime] = useState([]);
  const [index, setIndex] = useState(0);
  const cardsPerView = 6;
  const length = anime.length;
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/seasons/now", {
        headers: { "Content-Type": "application/json" },
      });
      const resanime = response.data.data;
      setAnime(resanime);
      console.log("fetched", resanime);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrevious = () => {
    const newIndex = index - cardsPerView;
    setIndex(newIndex < 0 ? length - cardsPerView : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + cardsPerView;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const addToList = (anime) => {
    console.log("backend", anime);
    fetch("https://streamsage0.onrender.com/api/v1/watchlist/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        movie: anime,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    alert("Added to Watchlist");
  };

  return (
    <div className="relative w-full bg-gray-900">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-35 text-text hover:text-primary hover:border-primary p-2 rounded-full"
        onClick={handlePrevious}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(index / cardsPerView) * 100}%)`,
          }}
        >
          {anime.map((animeItem, idx) => (
            <div key={idx} className="flex-shrink-0 w-1/6 p-1">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={animeItem.images.jpg.large_image_url}
                  alt={animeItem.title_english}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <button
                    onClick={() => addToList(animeItem)}
                    className="bg-yellow-400 text-black font-semibold hover:bg-yellow-500 px-6 py-2 rounded"
                  >
                    Add to Watchlist
                  </button>
                </div>
              </div>
              <h3 className="mt-2 text-text text-sm  font-sans line-clamp-2">
                {animeItem.title_english}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-35 text-text hover:text-primary hover:border-primary p-2 rounded-full"
        onClick={handleNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default AnimeCarousel;