import React from 'react'
import Navbar from '../Home Page/Navbar'
import Entry from './Entry'

const Watchlist = () => {
  return (
			<div>
				<Navbar />
				<div className="bg-background min-h-screen">
					<h1 className="font-poppins font-bold text-6xl text-text flex justify-center pt-12 ">
						{" "}
						Watchlist{" "}
					</h1>

					<div className="flex col-3  bg-primary justify-around mx-96 font-poppins font-bold text-2xl mt-20  ">
						<div className="flex justify-center w-52">
							<h1>All Entries</h1>
						</div>
						<div className="flex justify-center w-52">
							<h1>Plan to Watch</h1>
						</div>
						<div className="flex justify-center w-52">
							<h1>Completed</h1>
						</div>
					</div>

					<div className="h-16 bg-text mx-48 mt-16 flex items-center font-poppins font-bold text-2xl">
						<div className="w-1/12 flex justify-center">#</div>
						<div className="w-7/12 ">Title</div>
						<div className="w-2/12 flex justify-start">Rating</div>
						<div className="w-1/12">Status</div>
					</div>

					<Entry />
				</div>
			</div>
		);
}

export default Watchlist;