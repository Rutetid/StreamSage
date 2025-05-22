function Card({ img, genre }) {
	return (
		<div className="relative mx-auto flex-shrink-0">
			<img
				src={img}
				alt={`${genre} category`}
				className="w-56 h-80 sm:w-48 sm:h-72 md:w-56 md:h-80 lg:w-64 lg:h-96 object-cover rounded-lg shadow-md transition-transform hover:scale-105 duration-300"
			/>
			<div className="absolute bottom-0 left-0 right-0 py-2 flex justify-center items-center bg-background bg-opacity-90 rounded-b-lg">
				<span className="text-text text-xl sm:text-xl md:text-2xl 3xl:text-3xl font-poppins font-semibold">
					{genre}
				</span>
			</div>
		</div>
	);
}

export default Card;
