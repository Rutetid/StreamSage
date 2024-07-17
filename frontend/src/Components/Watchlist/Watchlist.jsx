import React, { useState } from "react";
import Navbar from "../Home Page/Navbar";
import Entry from "./Entry";
import axios from "axios";
import { useEffect } from "react";
import Popup from "../Home Page/Popup";

const Watchlist = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [mov, setMov] = useState([]);
	const token = localStorage.getItem("token");
	const fetchData = async () => {
		const response = await axios.get(
			"https://stream-sage-backend.vercel.app/api/v1/watchlist/list",
			{
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			},
		);
		const movies = response.data.movies;
		const normalizedMovies = movies.map((movie) => {
			// Normalize title
			const title = movie.title_english || movie.title || movie.name;
			const id = movie.id || movie.mal_id;
			// Normalize image URL
			// Assuming the properties could be 'image_url', 'poster', or similar
			let imageUrl;
			if (movie.poster_url) {
				imageUrl = movie.poster_url;
			} else if (movie.poster_path) {
				imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
			} else if (movie.images?.jpg?.large_image_url) {
				imageUrl = movie.images.jpg.large_image_url;
			}

			// Normalize rating
			// Assuming the properties could be 'rating', 'score', or similar
			const rating = movie.rating || movie.score;

			// Return a new object with a consistent structure
			return {
				...movie, // Spread the original movie object to keep other properties
				normalizedTitle: title, // Add the normalized title
				normalizedImageUrl: imageUrl, // Add the normalized image URL
				normalizedRating: rating, // Add the normalized rating
			};
		});

		setMov(normalizedMovies);
	};
	useEffect(() => {
		fetchData();
	}, []);
	console.log(mov);

	return (
		<div>
			<Navbar
				setIsMenuVisible={setIsMenuVisible}
				isMenuVisible={isMenuVisible}
			/>
			{isMenuVisible && <Popup />}
			<div className="bg-background min-h-screen pb-20">
				<h1 className="font-poppins font-bold text-6xl text-text flex justify-center pt-12 ">
					{" "}
					Watchlist{" "}
				</h1>
				{/* Topbar (plan to watch , completed) */}
				{/* <div className="flex col-3  bg-primary justify-around mx-96 font-poppins font-bold text-2xl mt-20  ">
						<div className="flex justify-center w-52">
							<h1>All Entries</h1>
						</div>
						<div className="flex justify-center w-52">
							<h1>Plan to Watch</h1>
						</div>
						<div className="flex justify-center w-52">
							<h1>Completed</h1>
						</div>
					</div> */}

				<div className="h-16 bg-primary mx-48 mt-16 flex items-center font-poppins font-bold text-2xl">
					<div className="w-1/12 flex justify-center">#</div>
					<div className="w-7/12 pl-10 ">Title</div>
					<div className="w-2/12 flex justify-start"> </div>
					<div className="w-4/12">Status (coming soon)</div>
					<div className="w-20 bg-accent "> </div>
				</div>

				{mov.map((movie, index) => (
					<Entry key={index} movie={movie} index={index + 1}>
						{" "}
					</Entry>
				))}
			</div>
		</div>
	);
};

export default Watchlist;
