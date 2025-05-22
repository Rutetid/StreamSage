import React, { useRef } from "react";
import User from "../../assets/user.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ isMenuVisible, setIsMenuVisible }) => {
	const [isSignedUp, setIsSignedUp] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const userButtonRef = useRef(null);
	const mobileMenuRef = useRef(null);

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

		// Add click outside listener for mobile menu
		const handleClickOutside = (event) => {
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target) &&
				!event.target.closest("[data-menu-toggle]")
			) {
				setMobileMenuOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuVisible((isMenuVisible) => !isMenuVisible);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev);
	};

	return (
		<div
			className={`flex justify-between items-center py-3 px-4 sm:px-6 md:px-10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b-0 ${
				scrolled
					? "bg-background shadow-lg backdrop-blur-sm bg-opacity-95"
					: "bg-background"
			}`}
		>
			<h1 className="text-2xl sm:text-3xl md:text-4xl 3xl:text-5xl font-koulen font-bold text-text">
				<Link
					to="/homepage"
					className="hover:text-primary transition-colors duration-300"
				>
					{" "}
					STREAMSAGE{" "}
				</Link>
			</h1>

			{/* Desktop Navigation */}
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
			</div>			<div className="flex items-center gap-4">
				{/* User/Sign up Button */}
				{isSignedUp ? (
					<button
						ref={userButtonRef}
						className="relative group"
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
							<div className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
						)}
					</button>
				) : (
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-300" />
						<Link
							to="/signup"
							className="relative px-4 py-2 bg-background rounded-md border border-primary/40 text-primary font-poppins font-semibold text-sm md:text-md 3xl:text-lg hover:text-white transition-colors duration-300"
						>
							Sign up
						</Link>
					</div>
				)}
				
				{/* Hamburger Menu Button (Mobile Only) */}
				<button
					type="button"
					className="md:hidden p-1 text-primary hover:text-text transition-colors"
					onClick={toggleMobileMenu}
					data-menu-toggle
					aria-label="Toggle mobile menu"
				>
					{mobileMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			{mobileMenuOpen && (
				<div
					ref={mobileMenuRef}
					className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg py-4 px-6 border-t border-gray-800 animate-fadeIn"
				>
					<div className="flex flex-col space-y-4 font-poppins font-medium text-lg text-primary">
						<Link
							to="/homepage"
							className="hover:text-text transition-colors duration-300 py-2"
							onClick={() => setMobileMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							to="/watchlist"
							className="hover:text-text transition-colors duration-300 py-2"
							onClick={() => setMobileMenuOpen(false)}
						>
							Watchlist
						</Link>
						<div className="cursor-pointer hover:text-text transition-colors duration-300 py-2">
							About
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
