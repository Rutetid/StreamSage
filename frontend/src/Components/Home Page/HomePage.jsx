import React from "react";
import Navbar from "./Navbar";
import SampleCard from "./SampleCard";
import Anime from "../../assets/anime.jpg";
import Trending from "./MyCarousel";
import Popup from "./Popup";
import { useState } from "react";
import AnimeCarousel from "./AnimeCarousel";
import MoviesCarousel from "./MoviesCarousel";
import DramaCarousel from "./DramaCarousel";

const HomePage = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	return (
		<div className="min-h-screen bg-background">
			<Navbar
				setIsMenuVisible={setIsMenuVisible}
				isMenuVisible={isMenuVisible}
			/>
			{isMenuVisible && <Popup />}

			<div>
				<h1 className="font-poppins font-bold text-6xl text-text flex justify-center pt-20 ">
					{" "}
					Trending{" "}
				</h1>

				<div className="flex 3xl:px-32 px-6 pt-20 ">
					<Trending />
				</div>
			</div>
			{/* 
			<div className="pt-32">
				<span className="font-poppins font-bold text-3xl text-text ml-40">
					{" "}
					Recommended for you
				</span>

				<div className="flex 3xl:px-32 px-40 pt-12 ">
					<Trending />
				</div>
			</div> */}

			<div className="pt-32">
				<div className="flex">
					<div className="bg-primary w-2 text-primary ml-10"> </div>
					<h1 className="font-poppins font-bold text-3xl text-text ml-5">
						{" "}
						Top Movies
					</h1>
				</div>

				<div className="flex 3xl:px-32 px-6 pt-12 ">
					<MoviesCarousel />
				</div>
			</div>

			<div className="pt-32">
				<div className="flex">
					<div className="bg-primary w-2 text-primary ml-10"> </div>
					<h1 className="font-poppins font-bold text-3xl text-text ml-5">
						{" "}
						Top Anime
					</h1>
				</div>

				<div className="flex 3xl:px-32 px-6 pt-12 ">
					<AnimeCarousel />
				</div>
			</div>

			<div className="pt-32">
				<span className="font-poppins font-bold text-3xl text-text ml-40">
					{" "}
					Top in Drama
				</span>

				<div className="flex 3xl:px-32 px-6 pt-12 ">
					<DramaCarousel />
				</div>
			</div>

			<div className="py-32">
				<span className="font-poppins font-bold text-3xl text-text ml-40">
					{" "}
					Top Web Series
				</span>

				<div className="flex col-span-4 gap-12 3xl:px-32 px-40 pt-12 justify-around items-center">
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
