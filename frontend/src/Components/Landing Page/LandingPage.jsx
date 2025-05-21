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
		<div className="bg-background min-h-screen">			<Navbar
				isMenuVisible={isMenuVisible}
				setIsMenuVisible={setIsMenuVisible}
			/>
			{isMenuVisible && <Popup setIsMenuVisible={setIsMenuVisible} toggleMenu={() => setIsMenuVisible(false)} />}

			<div className="pt-16 ">
				<h1 className="font-poppins font-bold text-4xl flex justify-center text-text lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
					One Place To Track All Your{" "}
				</h1>
				<span className="font-poppins font-bold text-4xl  flex justify-center gradient-text bg-clip-text from-grad-start to-grad-end lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
					Favourites
				</span>
				<span className="font-poppins text-xl 3xl:text-2xl font-medium flex justify-center pt-9 text-text">
					Discover your ultimate hub for favorites: a versatile site to manage
					your watchlist,
				</span>
				<span className="font-poppins text-xl 3xl:text-2xl font-medium flex justify-center text-text">
					track favorites, and get personalized show recommendations.
				</span>
			</div>

			<div className="flex justify-center">
				<button
					type="button"
					className="bg-primary font-poppins font-semibold text-xl 3xl:text-3xl flex justify-center py-2 px-11 rounded-lg mt-10"
				>
					{" "}
					<Link to="/homepage">Get Started</Link>
				</button>
			</div>

			<div className="flex col-span-3 gap-12 3xl:px-72 px-52 py-24 justify-around items-center  ">
				<Card img={Movie} genre={"Movies"} />
				<Card img={Drama} genre={"Drama"} />
				<Card img={WebSeries} genre={"Web Series"} />
				<Card img={Anime} genre={"Anime"} />
			</div>
		</div>
	);
}

export default LandingPage;
