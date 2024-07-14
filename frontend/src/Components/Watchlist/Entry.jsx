import got from "../../assets/got.jpg";
import { useEffect, useState } from "react";


const Entry = ({movie , index}) => {

	console.log( movie.images.jpg.large_image_url);

	return (
		<div>
			<div className="h-40 bg-text mx-48 flex items-center font-poppins font-bold text-2xl">
				<div className="w-1/12 flex justify-center">{index}</div>
				<div className="w-1/12">
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path }` || `${movie.images.jpg.large_image_url}`}
						alt={"sad"}
						className=" flex justify-start object-contain h-36"
					/>
				</div>
				<div className="w-6/12 pl-12">{movie.title_english || movie.title || movie.name}</div>
				<div className="w-2/12 pl-5 ">{movie.vote_average}</div>
				<div className="w-2/12 pl-5">seen</div>
			</div>
		</div>
	);
};

export default Entry;
