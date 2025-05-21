import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../Home Page/Navbar";
import Popup from "../Home Page/Popup";
import { Trash2, Star, Info, Loader2 } from "lucide-react";
import MovieDetailModal from "./MovieDetailModal";

const Watchlist = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [movies, setMovies] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesPerPage] = useState(8);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const roundUpToOneDecimalPlace = (num) => {
		return Math.ceil(num * 10) / 10;
	};

	const fetchMovies = useCallback(async () => {
		setIsLoading(true);
		try {
			const token = localStorage.getItem("token");
			const response = await fetch(
				"https://streamsage-1.onrender.com/api/v1/watchlist/list",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				},
			);
			const data = await response.json();
			const normalizedMovies = data.movies.map((movie) => {
				const rawRating = movie.score || movie.vote_average;
				const normalizedRating =
					rawRating && !Number.isNaN(Number(rawRating))
						? Number(rawRating)
						: null;
				return {
					id: movie.id || movie.mal_id,
					normalizedTitle: movie.title_english || movie.title || movie.name,
					normalizedImageUrl:
						movie.poster_url ||
						(movie.poster_path
							? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
							: null) ||
						movie.images?.jpg?.large_image_url,
					normalizedRating,
					overview:
						movie.overview || movie.synopsis || "No overview available.",
				};
			});
			setMovies(normalizedMovies);
			// Add a small delay to ensure the loading animation is seen
			setTimeout(() => {
				setIsLoading(false);
			}, 800);
		} catch (error) {
			console.error("Error fetching movies:", error);
			setIsLoading(false);
		}
	}, []);

	const removeFromList = async (id) => {
		try {
			const token = localStorage.getItem("token");
			const response = await fetch(
				"https://streamsage-1.onrender.com/api/v1/watchlist/remove",
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ id: id }),
				},
			);
			if (response.ok) {
				setMovies(movies.filter((movie) => movie.id !== id));
			} else {
				console.error("Failed to remove movie");
			}
		} catch (error) {
			console.error("Error removing movie:", error);
		}
	};

	const indexOfLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
	const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const openModal = (movie) => {
		setSelectedMovie(movie);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100 has-navbar">
			<Navbar
				setIsMenuVisible={setIsMenuVisible}
				isMenuVisible={isMenuVisible}
			/>
			{isMenuVisible && <Popup setIsMenuVisible={setIsMenuVisible} toggleMenu={() => setIsMenuVisible(false)} />}

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-4xl font-bold mb-8 text-center">My Watchlist</h1>

				{isLoading ? (
					<div className="flex flex-col items-center justify-center py-16">
						<div className="relative w-24 h-24">
							<div className="absolute inset-0 flex items-center justify-center">
								<Loader2 size={48} className="animate-spin text-blue-500" />
							</div>
							<div className="absolute inset-0 rounded-full border-t-4 border-blue-600 animate-ping opacity-20" />
						</div>
						<p className="mt-6 text-xl text-gray-300 font-medium">
							Loading your watchlist...
						</p>
					</div>
				) : movies.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-16 text-center">
						<div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md">
							<h2 className="text-2xl font-semibold mb-4">
								Your watchlist is empty
							</h2>
							<p className="text-gray-400 mb-6">
								Start adding movies and shows to build your collection!
							</p>
						</div>
					</div>
				) : (
					<>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 no-scrollbar">
							{currentMovies.map((movie) => (
								<div
									key={movie.id}
									className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:transform hover:-translate-y-1"
								>
									<div className="relative group">
										<div className="aspect-[2/3] overflow-hidden">
											<img
												src={movie.normalizedImageUrl || "/placeholder.svg"}
												alt={movie.normalizedTitle}
												className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
										</div>

										<div className="absolute top-0 right-0 p-2">
											{movie.normalizedRating && (
												<div className="bg-yellow-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center">
													{roundUpToOneDecimalPlace(movie.normalizedRating)}
												</div>
											)}
										</div>

										<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
											<button
												type="button"
												onClick={() => openModal(movie)}
												className="bg-blue-600/80 hover:bg-blue-700 text-white py-2 px-4 rounded-full mb-3 flex items-center justify-center gap-2 backdrop-blur-sm"
											>
												<Info size={18} />
												<span>Details</span>
											</button>
											<button
												type="button"
												onClick={() => removeFromList(movie.id)}
												className="bg-red-600/80 hover:bg-red-700 text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 backdrop-blur-sm"
												aria-label={`Remove ${movie.normalizedTitle} from watchlist`}
											>
												<Trash2 size={18} />
												<span>Remove</span>
											</button>
										</div>
									</div>

									<div className="p-4">
										<button
											type="button"
											className="font-bold text-lg mb-1 line-clamp-1 text-left w-full hover:text-blue-400"
											onClick={() => openModal(movie)}
											onKeyDown={(e) => e.key === "Enter" && openModal(movie)}
										>
											{movie.normalizedTitle}
										</button>
										<div className="flex items-center text-yellow-500">
											<Star size={16} className="fill-current" />
											<span className="ml-1 text-sm font-medium">
												{movie.normalizedRating !== null
													? roundUpToOneDecimalPlace(movie.normalizedRating)
													: "N/A"}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Pagination */}
						{Math.ceil(movies.length / moviesPerPage) > 1 && (
							<div className="mt-12 flex justify-center">
								<div className="inline-flex rounded-md shadow-sm bg-gray-800 p-1">
									{Array.from(
										{ length: Math.ceil(movies.length / moviesPerPage) },
										(_, i) => (
											<button
												type="button"
												key={`page-${i + 1}`}
												onClick={() => paginate(i + 1)}
												className={`min-w-[40px] h-10 flex items-center justify-center mx-1 rounded-md transition-colors ${
													currentPage === i + 1
														? "bg-blue-600 text-white"
														: "text-gray-300 hover:bg-gray-700"
												}`}
												aria-label={`Go to page ${i + 1}`}
											>
												{i + 1}
											</button>
										),
									)}
								</div>
							</div>
						)}
					</>
				)}
			</div>

			{/* Use the MovieDetailModal component instead of inline modal */}
			<MovieDetailModal
				movie={selectedMovie}
				isOpen={isModalOpen}
				onClose={closeModal}
				onRemove={removeFromList}
				roundUpToOneDecimalPlace={roundUpToOneDecimalPlace}
			/>
		</div>
	);
};

export default Watchlist;
