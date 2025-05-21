import React, { useState, useEffect } from "react";
import axios from "axios";

const Carousel = ({url}) => {
	const [movies, setMovies] = useState([]);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const cardsPerView = 6;
	const token = localStorage.getItem("token");

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await axios.get(url, {
					params: { language: "en-US" },
					headers: {
						accept: "application/json",
						Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWM3ZmRlYjU1ZWM5OTFjZmRjNDg3MzljOGY0MzQwYSIsIm5iZiI6MTczMTI0NDk5Ny4yMTUzNzEsInN1YiI6IjY2ODdiNTVkZDk1MzFlMjQ1YjA4MTM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WeCIYhgvJ8nRnR0F-jlDEsM4oViGpc63L5IFo9ci1Wo',
					},
				});
				console.log(response.data.results);
				setMovies(response.data.results);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching movies:", error);
				setLoading(false);
			}
		};

		fetchMovies();
	}, []);

	const handlePrevious = () => {
		const newIndex = index - cardsPerView;
		setIndex(newIndex < 0 ? movies.length - cardsPerView : newIndex);
	};

	const handleNext = () => {
		const newIndex = index + cardsPerView;
		setIndex(newIndex >= movies.length ? 0 : newIndex);
	};

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
			.catch((err) => console.log(err));

		alert("Added to Watchlist");
	};

	if (loading) {
		return <div>Loading...</div>;
	}

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
					{movies.map((movie) => (
						<div key={movie.id} className="flex-shrink-0 w-1/6 p-1">
							<div className="relative group overflow-hidden rounded-xl shadow-lg">
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
									alt={movie.title}
									className="w-full h-80 object-cover rounded-xl shadow-lg"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<button
										onClick={() => addToList(movie)}
										className="bg-yellow-400 text-white font-semibold hover:bg-yellow-500 px-4 py-2 rounded"
									>
										Add to Watchlist
									</button>
								</div>
							</div>
							<div className="pt-4">
								<h3 className="text-text text-sm  font-sans line-clamp-2">
									{movie.title || movie.name}
								</h3>
							</div>
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

export default Carousel;
