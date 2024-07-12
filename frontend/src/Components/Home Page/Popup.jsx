import React from 'react'

const Popup = () => {
  return (
			<div className=" bg-[#020508] rounded-md py-4 mt-1  absolute top-16 right-6 ">
				<div className=" px-8 ">
					<h1 className="bg-[#16385A] opacity-[33] rounded-md text-xl text-text font-poppins font-medium py-2 flex items-center justify-center px-10 ">
						{" "}
						Profile
					</h1>
				</div>
				<div className="px-8 mt-4 ">
					<h1 className="bg-[#16385A] opacity-33 rounded-md text-xl text-text opacity-[33] font-poppins font-medium py-2 flex items-center justify-center">
						{" "}
						LogOut
					</h1>
				</div>
			</div>
		);
}

export default Popup