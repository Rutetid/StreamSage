import React from 'react'
import User from "../../assets/user.svg";

const Navbar = () => {
  return (
			<div className="flex justify-around items-center pt-4 py-2 px-24 bg-top shadow-xl ">
				<h1 className="text-4xl 3xl:text-5xl font-koulen font-bold text-text ">
					STREAMSAGE{" "}
				</h1>
				<div className="flex gap-20 items-center font-poppins font-medium text-xl 3xl:text-2xl  text-primary pt-1">
					<h1>Home</h1>
					<h1>Features</h1>
					<h1>About</h1>
				</div>
				<div>
                    <img src={User} alt="user" className='size-10'/>

                </div>
			</div>
		);
}

export default Navbar;