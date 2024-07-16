import React, { useState, useEffect } from "react";
import axios from "axios";

const AnimeCarousel = () => {
	const [anime, setAnime] = useState([]);

	const [index, setIndex] = useState(0);
	const cardsPerView = 6;
	const length = anime.length;
	const token = localStorage.getItem("token");
	const [checked, setChecked] = useState(false);

	const fetchData = async () => {
		const response = await axios.get("https://api.jikan.moe/v4/seasons/now", {
			headers: { "Content-Type": "application/json" },
		});
		const resanime = response.data.data;
		setAnime(resanime);
		console.log("fetched", resanime);
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
		fetch("https://stream-sage-backend.vercel.app/api/v1/watchlist/add", {
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
		<div>
			<div className=" flex items-center justify-center w-full relative bg-background">
				<button
					className="absolute left-0 p-2 border border-text bg-black bg-opacity-35 text-text font-poppins text-5xl rounded-lg hover:text-primary hover:border-primary focus:outline-none z-10"
					onClick={handlePrevious}
					type="button"
				>
					&lt;
				</button>

				<div className="flex overflow-hidden w-full">
					<div
						className="flex transition-transform duration-500 ease-in-out "
						style={{
							transform: `translateX(-${(index / cardsPerView) * 100}%)`,
						}}
					>
						{anime.map((anime, index) => (
							<div key={index} className="flex-shrink-0 w-1/6 p-1">
								<div className="bg-gray-900 rounded-xl shadow-lg relative">
									<button
										type="button"
										className="absolute bottom-0 right-0 m-2 px-2 shadow-text shadow-sm bg-background rounded-lg font-poppins font-semibold text-text "
										onClick={() => {
											addToList(anime);
										}}
									>
										{" "}
										Add
									</button>
									<img
										src={anime.images.jpg.large_image_url}
										alt={anime.title_english}
										className="w-full h-80 object-cover rounded-xl shadow-lg"
									/>
								</div>
								<div className="pt-6">
									<div className="text-text text-sm font-koulen block overflow-hidden ">
										{anime.title_english}
									</div>
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
		</div>
	);
};

export default AnimeCarousel;
