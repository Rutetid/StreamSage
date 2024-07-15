import got from "../../assets/got.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Entry = ({ movie, index }) => {
	const id = movie.mal_id || movie.id || movie.mdl_id;
	//   console.log(movie.mal_id);

	const removeFromList = async (id) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.put(
				"/api/v1/watchlist/remove",
				{ id: id },
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				},
			);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<div className="h-40 bg-text mx-48 flex items-center font-poppins font-bold text-2xl">
				<div className="w-1/12 flex justify-center">{index}</div>
				<div className="w-1/12">
					<img
						src={movie.normalizedImageUrl}
						alt={"sad"}
						className="flex justify-start object-contain h-36"
					/>
				</div>
				<div className="w-8/12 pl-12">{movie.normalizedTitle}</div>
				{/* <div className="w-2/12 pl-5 ">{movie.vote_average}</div> */}
				<button
					type="button"
					className="w-1/12 bg-background rounded-lg text-text mr-5"
				>
					seen
				</button>
				<button
					type="button"
					className="w-8 mr-10 bg-accent rounded-sm flex justify-center"
					onClick={() => removeFromList(id)} // Pass id to the function
				>
					x
				</button>
			</div>
		</div>
	);
};

export default Entry;
