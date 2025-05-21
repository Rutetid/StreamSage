import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";

const Popup = ({ setIsMenuVisible, toggleMenu }) => {
	const navigate = useNavigate();
	const popupRef = useRef(null);
	const isFirstRender = useRef(true);
	const isUserButtonClick = useRef(false);

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/");
	};

	// Close popup when clicking outside
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		const handleClickOutside = (event) => {
			// If user clicks anywhere except the popup
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				// Check if the click is on the user button in navbar
				const navbarUserButton = document.querySelector("[aria-label='User menu']");
				if (navbarUserButton?.contains(event.target)) {
					// This is handled by the button's onClick, so we don't want to interfere
					return;
				}

				// Otherwise, close the popup
				setIsMenuVisible(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [setIsMenuVisible]);

	return (
		<div
			ref={popupRef}
			className="bg-white/10 backdrop-blur-md backdrop-filter rounded-xl py-4 fixed top-20 right-6 z-[100] shadow-xl border border-white/20 animate-fadeIn"
		>
			<div className="px-6">
				<button
					className="w-full bg-gradient-to-r from-blue-600/40 to-blue-500/40 hover:from-blue-600/60 hover:to-blue-500/60 rounded-lg p-0.5 backdrop-blur-sm transition-all duration-300"
					type="button"
				>
					<div className="bg-gray-900/70 backdrop-blur-md rounded-md px-6 py-3 flex items-center gap-3">
						<User size={18} className="text-blue-400" />
						<span className="text-white font-poppins font-medium">Profile</span>
					</div>
				</button>
			</div>
			<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3" />
			<div className="px-6">
				<button
					className="w-full bg-gradient-to-r from-red-600/40 to-red-500/40 hover:from-red-600/60 hover:to-red-500/60 rounded-lg p-0.5 backdrop-blur-sm transition-all duration-300"
					onClick={handleLogout}
					type="button"
				>
					<div className="bg-gray-900/70 backdrop-blur-md rounded-md px-6 py-3 flex items-center gap-3">
						<LogOut size={18} className="text-red-400" />
						<span className="text-white font-poppins font-medium">Logout</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Popup;
