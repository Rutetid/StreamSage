'use client'

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import axios from "axios"

export default function Trending({
  autoSlide = true,
  autoSlideInterval = 3000,
}) {
  const [movies, setMovies] = useState([])
  const [curr, setCurr] = useState(0)
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("token")

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWM3ZmRlYjU1ZWM5OTFjZmRjNDg3MzljOGY0MzQwYSIsIm5iZiI6MTczMTI0NDk5Ny4yMTUzNzEsInN1YiI6IjY2ODdiNTVkZDk1MzFlMjQ1YjA4MTM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WeCIYhgvJ8nRnR0F-jlDEsM4oViGpc63L5IFo9ci1Wo",
            },
          }
        )
        setMovies(response.data.results || [])
        setLoading(false)
      } catch (error) {
        console.error("Error fetching movies:", error)
        setMovies([])
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  const addToList = (movie) => {
    fetch("https://streamsage0.onrender.com/api/v1/watchlist/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ movie }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))

    alert("Added to Watchlist")
  }

  const prev = () => setCurr((curr) => (curr === 0 ? movies.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === movies.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval])

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (

    <div className="overflow-hidden relative w-full bg-black">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-full p-4">
              <div className="relative group overflow-hidden rounded-lg shadow-lg max-w-3xl mx-auto">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                    alt={movie.title || movie.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h3 className="text-white text-md  font-sans line-clamp-2">
                      {movie.title || movie.name}
                    </h3>
                    <button
                      onClick={() => addToList(movie)}
                      className="bg-yellow-400 text-white font-semibold hover:bg-yellow-500 px-4 py-2 rounded transition-colors duration-200"
                    >
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex-shrink-0 w-full flex justify-center items-center h-64">
            No movies available
          </div>
        )}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow hover:bg-white transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow hover:bg-white transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
	  <div className="absolute bottom-1 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {movies.length > 0 &&
            movies.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-1 h-1 bg-white rounded-full ${
                  curr === i ? "scale-150" : "bg-opacity-50"
                }`}
              />
            ))}
        </div>
      
    </div>
	
	</div>
  )
}