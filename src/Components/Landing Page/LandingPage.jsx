function LandingPage() {
  return (
			<div className="bg-background min-h-screen">
				<div className="flex justify-around items-center pt-8 px-24">
					<h1 className="text-4xl font-koulen font-bold text-text ">
						STREAMSAGE{" "}
					</h1>
					<div className="flex gap-10 items-center font-poppins font-medium text-2xl text-primary pt-1">
						<h1>Home</h1>
						<h1>Features</h1>
						<h1>About</h1>
					</div>
					<div className="border-2 rounded-md py-2 px-3 border-primary text-primary font-poppins font-semibold text-md">
						<a href="#">Sign up</a>
					</div>
				</div>

				<div className="mt-24">
					<h1 className="font-poppins font-bold text-5xl flex justify-center text-text">
						One Place To Track All Your{" "}
					</h1>
					<span className="font-poppins font-bold text-5xl flex justify-center gradient-text bg-clip-text from-grad-start to-grad-end">
						Favourites
					</span>
					<span className="font-poppins text-lg font-medium flex justify-center pt-9 text-text">
						Discover your ultimate hub for favorites: a versatile site to manage
						your watchlist,
					</span>
					<span className="font-poppins text-lg font-medium flex justify-center text-text">
						track favorites, and get personalized show recommendations.
					</span>
				</div>

				<div className="flex justify-center">
					<button
						type="button"
						className="bg-primary font-poppins font-semibold text-xl flex justify-center py-2 px-11 rounded-lg mt-10"
					>
						Make Your List
					</button>
				</div>
			</div>
		);
}

export default LandingPage;