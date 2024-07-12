import React from "react";
import Navbar from "./Navbar";
import SampleCard from "./SampleCard";
import Anime from "../../assets/anime.jpg";
import Trending from "./MyCarousel";
import Popup from "./Popup";
import { useState } from "react";

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

			<div className="pt-32">
				<span className="font-poppins font-bold text-3xl text-text ml-40">
					{" "}
					Recommended for you
				</span>

				<div className="flex 3xl:px-32 px-40 pt-12 ">
					<Trending />
				</div>
			</div>

			<div className="pt-32">
				<span className="font-poppins font-bold text-3xl text-text ml-40">
					{" "}
					Top Movies
				</span>

				<div className="flex col-span-4 gap-12 3xl:px-32 px-40 pt-12 justify-around items-center">
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
				</div>
			</div>

			<div className="pt-32">
				<span className="font-poppins font-bold text-3xl text-text ml-40">
					{" "}
					Top Anime
				</span>

				<div className="flex col-span-4 gap-12 3xl:px-32 px-40 pt-12 justify-around items-center">
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
				</div>
			</div>

			<div className="pt-32">
				<span className="font-poppins font-bold text-3xl text-text ml-40">
					{" "}
					Top in Drama
				</span>

				<div className="flex col-span-4 gap-12 3xl:px-32 px-40 pt-12 justify-around items-center">
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
					<SampleCard img={Anime} genre={"Anime"} />
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
