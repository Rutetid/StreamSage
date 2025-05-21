import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Trending from "./Trending";
import Popup from "./Popup";
import AnimeCarousel from "./AnimeCarousel";
import MoviesCarousel from "./MoviesCarousel";
import WebSeriesCarousel from "./WebSeriesCarousel";
import { ChevronRight, TrendingUp, Film, Tv2, Glasses } from "lucide-react";

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
			{viewMoreLink && (
				<a
					href={viewMoreLink}
					className="text-primary flex items-center text-sm hover:text-primary/80 transition-colors duration-200"
				>
					View more <ChevronRight className="w-4 h-4 ml-1" />
				</a>
			)}
		</div>
	);
};

const HomePage = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	// Add fade-in animation effect when page loads
	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<div className="min-h-screen bg-top text-text has-navbar">
			{/* Navbar */}
			<Navbar
				setIsMenuVisible={setIsMenuVisible}
				isMenuVisible={isMenuVisible}
			/>
			{isMenuVisible && <Popup setIsMenuVisible={setIsMenuVisible} toggleMenu={() => setIsMenuVisible(false)} />}

			{/* Hero Section with Trending */}
			<div
				className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
			>
				<div className="max-w-screen-2xl mx-auto pt-6 pb-2 px-4">
					<CategoryHeader
						icon={TrendingUp}
						title="Trending Now"
						viewMoreLink="/trending"
					/>
					<div className="rounded-xl overflow-hidden shadow-lg">
						<Trending autoSlideInterval={5000} />
					</div>
				</div>

				{/* Movies Section */}
				<section className="max-w-screen-2xl mx-auto pt-16 pb-4 px-4">
					<CategoryHeader
						icon={Film}
						title="Top Movies"
						viewMoreLink="/movies"
					/>
					<div className="mt-2">
						<MoviesCarousel />
					</div>
				</section>

				{/* Anime Section */}
				<section className="max-w-screen-2xl mx-auto pt-16 pb-4 px-4">
					<CategoryHeader
						icon={Glasses}
						title="Top Anime"
						viewMoreLink="/anime"
					/>
					<div className="mt-2">
						<AnimeCarousel />
					</div>
				</section>

				{/* Web Series Section */}
				<section className="max-w-screen-2xl mx-auto pt-16 pb-20 px-4">
					<CategoryHeader
						icon={Tv2}
						title="Top Web Series"
						viewMoreLink="/series"
					/>
					<div className="mt-2">
						<WebSeriesCarousel />
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-gray-900 py-10 mt-10">
					<div className="max-w-screen-2xl mx-auto px-4">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<div className="mb-6 md:mb-0">
								<h2 className="font-poppins font-bold text-xl text-white">
									StreamSage
								</h2>
								<p className="text-gray-400 mt-2 text-sm">
									Your ultimate streaming guide
								</p>
							</div>
							<div className="flex space-x-6">
								<a
									href="/about"
									className="text-gray-400 hover:text-primary transition-colors duration-200"
								>
									About
								</a>
								<a
									href="/contact"
									className="text-gray-400 hover:text-primary transition-colors duration-200"
								>
									Contact
								</a>
								<a
									href="/privacy"
									className="text-gray-400 hover:text-primary transition-colors duration-200"
								>
									Privacy
								</a>
								<a
									href="/terms"
									className="text-gray-400 hover:text-primary transition-colors duration-200"
								>
									Terms
								</a>
							</div>
						</div>
						<div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
							© {new Date().getFullYear()} StreamSage. All rights reserved.
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default HomePage;
