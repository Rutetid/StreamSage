import React from "react";
import User from "../../assets/user.svg";

const Navbar = () => {
	return (
		<div className="flex justify-between pt-4 py-2 bg-top shadow-xl px-10 ">
			<h1 className="text-4xl 3xl:text-5xl font-koulen font-bold text-text ">
				STREAMSAGE{" "}
			</h1>
			<div className="flex col-span-3 gap-12 font-poppins font-medium text-xl 3xl:text-2xl  text-primary pt-1">
				<div>Home</div>
				<div>Featues</div>
				<div>About</div>
			</div>
			<div className="pl-32 3xl:pl-40">
				<img src={User} alt="user" className="size-10" />
			</div>
		</div>
	);
};

export default Navbar;
