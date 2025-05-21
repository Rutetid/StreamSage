import React, { useRef } from "react";
import User from "../../assets/user.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isMenuVisible, setIsMenuVisible }) => {
	const [isSignedUp, setIsSignedUp] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const userButtonRef = useRef(null);

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
			</div>			{isSignedUp ? (				<button
					ref={userButtonRef}
					className="ml-4 sm:ml-8 lg:ml-12 3xl:ml-40 relative group"
					type="button"
					onClick={toggleMenu}
					aria-label="User menu"
				>
					<div className="p-0.5 rounded-full bg-gradient-to-r from-blue-500/50 to-primary/50 group-hover:from-blue-500/70 group-hover:to-primary/70 transition-all duration-300">
						<div className="bg-background rounded-full p-1">
							<img src={User} alt="user" className="size-7 md:size-8" />
						</div>
					</div>
					{isMenuVisible && (
						<div className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
					)}
				</button>
			) : (
				<div className="relative group">
					<div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-300"></div>
					<Link to="/signup" className="relative px-4 py-2 bg-background rounded-md border border-primary/40 text-primary font-poppins font-semibold text-sm md:text-md 3xl:text-lg hover:text-white transition-colors duration-300">
						Sign up
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
