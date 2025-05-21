import React, { useState, useEffect } from "react";
import Navbar from "../Home Page/Navbar";
const Watchlist = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [movies, setMovies] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesPerPage] = useState(10);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		fetchMovies();
	}, []);

	const roundUpToOneDecimalPlace = (num) => {
		return Math.ceil(num * 10) / 10;
	};

	const fetchMovies = async () => {
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
					rawRating && !isNaN(rawRating) ? Number(rawRating) : null;
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
		} catch (error) {
			console.error("Error fetching movies:", error);
		}
	};

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

	return (
		<div className="min-h-screen bg-gray-900 text-gray-100 ">
			<Navbar
				setIsMenuVisible={setIsMenuVisible}
				isMenuVisible={isMenuVisible}
			/>
			{isMenuVisible && <Popup />}
			<h1 className="text-4xl font-bold mt-12 mb-8 text-center">Watchlist</h1>
			<div className="overflow-x-auto no-scrollbar px-10">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-gray-800">
							<th className="p-3 text-left">#</th>
							<th className="p-3 text-left">Title</th>
							<th className="p-3 text-left">Rating</th>
							<th className="p-3 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{currentMovies.map((movie, index) => (
							<tr
								key={movie.id}
								className="border-b border-gray-700 hover:bg-gray-800"
							>
								<td className="p-3">{indexOfFirstMovie + index + 1}</td>
								<td className="p-3 flex items-center">
									<img
										src={movie.normalizedImageUrl || "/placeholder.svg"}
										alt={movie.normalizedTitle}
										className="w-12 h-16 object-cover mr-3"
									/>
									<button
										type="button"
										className="text-left hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
										onClick={() => openModal(movie)}
									>
										{movie.normalizedTitle}
									</button>
								</td>
								<td className="p-3">
									{movie.normalizedRating !== null
										? roundUpToOneDecimalPlace(movie.normalizedRating)
										: "N/A"}
								</td>
								<td className="p-3">
									<button
										type="button"
										onClick={() => removeFromList(movie.id)}
										className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
										aria-label={`Remove ${movie.normalizedTitle} from watchlist`}
									>
										Remove
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="mt-4 flex justify-center">
				{Array.from(
					{ length: Math.ceil(movies.length / moviesPerPage) },
					(_, i) => (
						<button
							type="button"
							key={i}
							onClick={() => paginate(i + 1)}
							className={`mx-1 px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
								currentPage === i + 1
									? "bg-blue-600 text-white"
									: "bg-gray-700 text-gray-300 hover:bg-gray-600"
							}`}
							aria-label={`Go to page ${i + 1}`}
						>
							{i + 1}
						</button>
					),
				)}
			</div>
			{isModalOpen && selectedMovie && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
					role="dialog"
					aria-modal="true"
				>
					<div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full">
						<h2 className="text-2xl font-bold mb-4">
							{selectedMovie.normalizedTitle}
						</h2>
						<img
							src={selectedMovie.normalizedImageUrl || "/placeholder.svg"}
							alt={selectedMovie.normalizedTitle}
							className="w-32 h-48 object-cover float-left mr-4 mb-2"
						/>
						<p className="text-gray-300 mb-4">
							{selectedMovie.synopsis || selectedMovie.overview}
						</p>
						<p className="text-gray-300">
							Rating:{" "}
							{selectedMovie.normalizedRating !== null
								? roundUpToOneDecimalPlace(selectedMovie.normalizedRating)
								: "N/A"}
						</p>
						<button
							type="button"
							onClick={() => setIsModalOpen(false)}
							className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Watchlist;
