import Carousel from "./Carousel";

const MoviesCarousel = () => {
  return (
	<Carousel
	  url="https://api.themoviedb.org/3/movie/popular"
	/>
  );
}

export default MoviesCarousel;