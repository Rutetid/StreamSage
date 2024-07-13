import React, { useState } from 'react'
import Navbar from '../Home Page/Navbar'
import Entry from './Entry'
import axios from "axios"
import { useEffect } from 'react'

const Watchlist = () => {
	const [mov,setMov] = useState([]);
	const token = localStorage.getItem("token");
	const fetchData = async () => {
		const response = await axios.get(
			"http://localhost:3000/api/v1/watchlist/list",
			{
				headers: {
					"Content-Type": "application/json",
					'authorization': `Bearer ${token}`,
				},
			},
		);
		const movies = response.data.movies;
		setMov(movies);
		
	};
	useEffect(()=>{
		fetchData();
		
	},[])
	console.log(mov);

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

					<div className="h-16 bg-primary mx-48 mt-16 flex items-center font-poppins font-bold text-2xl">
						<div className="w-1/12 flex justify-center">#</div>
						<div className="w-7/12 ">Title</div>
						<div className="w-2/12 flex justify-start">Rating</div>
						<div className="w-1/12">Status</div>
					</div>

					{mov.map((movie,index) => (
						
						<Entry key={index} movie={movie} index={index + 1}>  </Entry>
					))}
					
				</div>
			</div>
		);
}

export default Watchlist;