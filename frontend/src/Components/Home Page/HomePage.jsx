import React from "react";
import Navbar from "./Navbar";
import Trending from "./Trending";
import Popup from "./Popup";
import { useState } from "react";
import AnimeCarousel from "./AnimeCarousel";
import MoviesCarousel from "./MoviesCarousel";
import WebSeriesCarousel from "./WebSeriesCarousel";
import {
	ChevronRight,
	TrendingUp,
	Film,
	Tv2,
	Clapperboard,
} from "lucide-react";

// CategoryHeader component
const CategoryHeader = ({ icon, title, viewMoreLink }) => {
	const Icon = icon;
	return (
		<div className="flex justify-between items-center mb-6 px-4 sm:px-6 lg:px-8">
			<div className="flex items-center space-x-3">
				<div className="bg-primary/10 p-2 rounded-lg">
					<Icon className="text-primary w-5 h-5" />
				</div>
				<h2 className="font-poppins font-bold text-xl md:text-2xl text-text">
					{title}
				</h2>
			</div>
			{/* {viewMoreLink && (
				<a
					href={viewMoreLink}
					className="text-primary flex items-center text-sm hover:text-primary/80 transition-colors duration-200"
				>
					View more <ChevronRight className="w-4 h-4 ml-1" />
				</a>
			)} */}
		</div>
	);
};

const HomePage = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	return (
		<div className="min-h-screen bg-gray-900 text-text has-navbar">
			<Navbar
				setIsMenuVisible={setIsMenuVisible}
				isMenuVisible={isMenuVisible}
			/>
			{isMenuVisible && <Popup setIsMenuVisible={setIsMenuVisible} toggleMenu={() => setIsMenuVisible(false)} />}

			{/* Main content container with no extra top margin to avoid white line */}
			<div className="max-w-screen-2xl mx-auto pt-10">
				{/* Trending section with CategoryHeader component */}
				<div className="px-4 pb-2">
					<CategoryHeader
						icon={TrendingUp}
						title="Trending Now"
						viewMoreLink="/trending"
					/>
					<div className="rounded-xl overflow-hidden  ring-gray-800/50 dark:ring-white/10">
						<Trending autoSlideInterval={5000} />
					</div>
				</div>

				{/* Top Movies Section */}
				<div className="pt-16 px-4">
					<div className="flex">
						<div className="bg-primary w-2 text-primary"> </div>
						<h1 className="font-poppins font-bold text-2xl md:text-3xl text-text ml-5">
							Top Movies
						</h1>
					</div>

					<div className="pt-8">
						<MoviesCarousel />
					</div>
				</div>

				{/* Top Anime Section */}
				<div className="pt-16 px-4">
					<div className="flex">
						<div className="bg-primary w-2 text-primary"> </div>
						<h1 className="font-poppins font-bold text-2xl md:text-3xl text-text ml-5">
							Top Anime
						</h1>
					</div>

					<div className="pt-8">
						<AnimeCarousel />
					</div>
				</div>

				{/* Top Web Series Section */}
				<div className="py-16 px-4">
					<div className="flex">
						<div className="bg-primary w-2 text-primary"> </div>
						<h1 className="font-poppins font-bold text-2xl md:text-3xl text-text ml-5">
							Top Web Series
						</h1>
					</div>
					<div className="pt-8">
						<WebSeriesCarousel />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
