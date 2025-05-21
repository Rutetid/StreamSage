import LandingPage from "./Components/Landing Page/LandingPage";
import HomePage from "./Components/Home Page/HomePage";
import Watchlist from "./Components/Watchlist/Watchlist";
import Login from "./Components/Landing Page/Login";
import Signup from "./Components/Landing Page/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="no-scrollbar bg-">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="homepage" element={<HomePage />} />
				<Route path="watchlist" element={<Watchlist />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
