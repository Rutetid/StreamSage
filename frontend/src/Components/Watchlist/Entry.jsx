import React from "react";
import got from "../../assets/got.jpg";
import axios from "axios";

const Entry = () => {
	const token = localStorage.getItem("token");
	const response = async () => {
		axios.get("http://localhost:3000/api/v1/watchlist/get", {
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		const movies = await response.data;
		console.log(movies);
	};

	return (
		<div>
			<div className="h-40 bg-text mx-48 flex items-center font-poppins font-bold text-2xl">
				<div className="w-1/12 flex justify-center">1</div>
				<div className="w-1/12">
					<img
						src={got}
						alt=""
						className=" flex justify-start object-contain h-36"
					/>
				</div>
				<div className="w-6/12 pl-12">Game of Thrones</div>
				<div className="w-2/12 pl-5 ">9.0</div>
				<div className="w-2/12 pl-5">seen</div>
			</div>
		</div>
	);
};

export default Entry;
