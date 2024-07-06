import React, { useState } from "react";


const Trending = () => {

	
	const movies = [
		{ title: "Oppenhiemer", image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" },
		{ title: "Movie 2", image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" },
		{ title: "Movie 3", image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" },
		{ title: "Movie 4", image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" },
		{ title: "Movie 5", image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" },
		{ title: "Movie 6", image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" },
		{ title: "Movie 7", image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" },
		{ title: "Movie 8", image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" },
		];

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 4) % movies.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 4 + movies.length) % movies.length,
		);
	};

	return (
		<div className="flex items-center justify-center w-full relative bg-background">
			<button
				className="absolute left-0 p-2 border border-text bg-black bg-opacity-35  text-text font-poppins text-5xl rounded-lg hover:text-primary hover:border-primary focus:outline-none z-10 "
				onClick={prevSlide}
				type="button"
			>
				&lt;
			</button>

			<div className="flex overflow-hidden col-span-4 gap-12 ">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${(currentIndex / 4) * 100}%)` }}
				>
					{movies.map((movie, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} className="flex-shrink-0 w-1/4 p-5 ">
							<div className="bg-gray-900 rounded-lg  shadow-lg">
								<img
									src={movie.image}
									alt={movie.title}
									className="w-full h-96 object-cover rounded-sm shadow-lg"
								/>
							</div>
							<div className="pt-4 3xl:w-80 3xl:h-auto">
								<span className="text-text text-2xl 3xl:text-3xl font-poppins font-semibold ">
									{movie.title}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>

			<button
				className="absolute right-0 p-2 border border-text bg-black bg-opacity-35  text-text font-poppins text-5xl rounded-lg hover:text-primary hover:border-primary focus:outline-none z-10"
				onClick={nextSlide}
				type="button"
			>
				&gt;
			</button>
		</div>
	);
};

export default Trending;
