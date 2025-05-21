import React from "react";
import User from "../../assets/user.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ IsMenuVisible, setIsMenuVisible }) => {
	const [isSignedUp, setIsSignedUp] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const usertoken = localStorage.getItem("token");
		setIsSignedUp(!!usertoken);

		// Add scroll event listener
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuVisible((isMenuVisible) => !isMenuVisible);
	};	return (
		<div
			className={`flex justify-between items-center py-3 px-8 md:px-10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b-0 ${
				scrolled
					? "bg-background shadow-lg backdrop-blur-sm bg-opacity-95"
					: "bg-background"
			}`}
		>
			<h1 className="text-3xl md:text-4xl 3xl:text-5xl font-koulen font-bold text-text">
				<Link
					to="/homepage"
					className="hover:text-primary transition-colors duration-300"
				>
					{" "}
					STREAMSAGE{" "}
				</Link>
			</h1>
			<div className="hidden md:flex items-center gap-8 lg:gap-12 font-poppins font-medium text-lg lg:text-xl 3xl:text-2xl text-primary">
				<div>
					<Link
						to="/homepage"
						className="hover:text-text transition-colors duration-300"
					>
						Home
					</Link>
				</div>
				<div>
					<Link
						to="/watchlist"
						className="hover:text-text transition-colors duration-300"
					>
						Watchlist
					</Link>
				</div>
				<div className="cursor-pointer hover:text-text transition-colors duration-300">
					About
				</div>
			</div>
			{isSignedUp ? (
				<button
					className="pl-4 sm:pl-8 lg:pl-12 3xl:pl-40 hover:opacity-80 transition-opacity duration-300"
					type="button"
					onClick={toggleMenu}
				>
					<img src={User} alt="user" className="size-8 md:size-10" />
				</button>
			) : (
				<div className="border-2 rounded-md py-2 px-3 border-primary text-primary font-poppins font-semibold text-sm md:text-md 3xl:text-lg hover:bg-primary hover:text-background transition-all duration-300">
					<Link to="/signup">Sign up</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
