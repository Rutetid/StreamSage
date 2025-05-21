import React from "react";
import { Trash2, Star } from "lucide-react";

const MovieDetailModal = ({
	movie,
	isOpen,
	onClose,
	onRemove,
	roundUpToOneDecimalPlace,
}) => {
	const handleModalKeyDown = (e) => {
		if (e.key === "Escape") {
			onClose();
		}
	};

	if (!isOpen || !movie) return null;

	return (
		<dialog
			className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm no-scrollbar"
			open
			onKeyDown={handleModalKeyDown}
		>
			<div
				className="bg-gray-800 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl"
				tabIndex={-1}
				aria-labelledby="movie-title"
			>
				<div className="flex flex-col md:flex-row">
					<div className="md:w-1/3 p-6">
						<img
							src={movie.normalizedImageUrl || "/placeholder.svg"}
							alt={movie.normalizedTitle}
							className="w-full h-auto object-cover rounded-lg shadow-lg"
						/>
					</div>
					<div className="md:w-2/3 p-6">
						<div className="flex justify-between items-start">
							<h2 id="movie-title" className="text-3xl font-bold mb-4">
								{movie.normalizedTitle}
							</h2>
							{movie.normalizedRating && (
								<div className="flex items-center bg-yellow-500/20 px-3 py-1 rounded-full">
									<Star size={18} className="text-yellow-500" />
									<span className="ml-1 font-semibold text-yellow-400">
										{roundUpToOneDecimalPlace(movie.normalizedRating)}
									</span>
								</div>
							)}
						</div>

						<div className="my-6">
							<h3 className="text-lg font-semibold text-gray-300 mb-2">
								Overview
							</h3>
							<p className="text-gray-400 leading-relaxed">
								{movie.synopsis || movie.overview}
							</p>
						</div>

						<div className="flex gap-4 mt-8">
							<button
								type="button"
								onClick={() => onRemove(movie.id)}
								className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 transition-colors"
							>
								<Trash2 size={18} />
								Remove
							</button>
							<button
								type="button"
								onClick={onClose}
								className="px-5 py-2 rounded-lg border border-gray-600 hover:bg-gray-700 text-gray-300 transition-colors"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default MovieDetailModal;
