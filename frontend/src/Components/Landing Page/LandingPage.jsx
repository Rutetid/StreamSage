import Card from "./Card";
import Anime from "../../assets/anime.jpg";
import Movie from "../../assets/Movie.jpg";
import Drama from "../../assets/Drama.jpg";
import WebSeries from "../../assets/got.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Home Page/Navbar";
import Popup from "../Home Page/Popup";

function LandingPage() {
	const navigate = useNavigate();
	const [isSignedUp, setIsSignedUp] = useState(false);
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const handleClick = () => {
		navigate(isSignedUp ? "/homepage" : "/signup");
	};

	useEffect(() => {
		const userToken = localStorage.getItem("token");
		setIsSignedUp(!!userToken);
	}, []);
	return (
		<div className="bg-background min-h-screen has-navbar">
			<Navbar
				isMenuVisible={isMenuVisible}
				setIsMenuVisible={setIsMenuVisible}
			/>
			{isMenuVisible && (
				<Popup
					setIsMenuVisible={setIsMenuVisible}
					toggleMenu={() => setIsMenuVisible(false)}
				/>
			)}

			<div className="pt-16 px-4 sm:px-6 md:px-8">
				<h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl flex justify-center text-center text-text lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
					One Place To Track All Your{" "}
				</h1>
				<span className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl flex justify-center text-center gradient-text bg-clip-text from-grad-start to-grad-end lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
					Favourites
				</span>				<div className="mt-9 text-center">
					<p className="font-poppins text-sm sm:text-base md:text-xl 3xl:text-2xl font-medium text-text">
						Discover your ultimate hub for favorites: a versatile site to manage
						your watchlist,
					</p>
					<p className="font-poppins text-sm sm:text-base md:text-xl 3xl:text-2xl font-medium text-text">
						track favorites, and get personalized show recommendations.
					</p>
				</div>
			</div>

			<div className="flex justify-center mt-8 md:mt-10">
				<button
					type="button"
					className="bg-primary font-poppins font-semibold text-lg sm:text-xl 3xl:text-3xl flex justify-center py-2 px-8 sm:px-11 rounded-lg transition-all hover:bg-primary/90"
				>
					<Link to="/homepage">Get Started</Link>
				</button>
			</div>			<div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-52 3xl:px-72 py-12 md:py-16 lg:py-24">
				<Card img={Movie} genre={"Movies"} />
				<Card img={Drama} genre={"Drama"} />
				<Card img={WebSeries} genre={"Web Series"} />
				<Card img={Anime} genre={"Anime"} />
			</div>
		</div>
	);
}

export default LandingPage;
