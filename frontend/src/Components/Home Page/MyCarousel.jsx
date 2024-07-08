import React, { useState } from 'react';
import movies from "../../assets/Trending.json";


const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const cardsPerView = 6;
  const length = movies.length;

  const handlePrevious = () => {
    const newIndex = index - cardsPerView;
    setIndex(newIndex < 0 ? length - cardsPerView : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + cardsPerView;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
			<div className="Trending flex items-center justify-center w-full relative bg-background">
				<button
					className="absolute left-0 p-2 border border-text bg-black bg-opacity-35 text-text font-poppins text-5xl rounded-lg hover:text-primary hover:border-primary focus:outline-none z-10"
					onClick={handlePrevious}
					type="button"
				>
					&lt;
				</button>

				<div className="flex overflow-hidden w-full">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{
							transform: `translateX(-${(index / cardsPerView) * 100}%)`,
						}}
					>
						{movies.map((movie, i) => (
							<div key={i} className="flex-shrink-0 w-1/6 p-1  ">
								<div className="bg-gray-900 rounded-xl shadow-lg">
									<img
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										alt={movie.title}
										className="w-full h-80 object-cover rounded-xl shadow-lg"
									/>
								</div>
								<div className="pt-4">
									<span className="text-text text-sm font-poppins font-semibold">
										{movie.title || movie.name}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<button
					className="absolute right-0 p-2 border border-text bg-black bg-opacity-35 text-text font-poppins text-5xl rounded-lg hover:text-primary hover:border-primary focus:outline-none z-10"
					onClick={handleNext}
					type="button"
				>
					&gt;
				</button>
			</div>
		);
};

export default MyCarousel;
