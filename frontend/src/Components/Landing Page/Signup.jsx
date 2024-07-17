import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [firstname, setFirstname] = React.useState("");
	const [lastname, setLastname] = React.useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"https://stream-sage-backend.vercel.app/api/v1/user/signup",
				{
					username,
					password,
					firstname,
					lastname,
				},
			);
			localStorage.setItem("token", response.data.token);
			if (response.status === 200) {
				navigate("/homepage");
				alert("Signed in Succesfully");
			}
		} catch (error) {
			console.error("There was an error!", error);
		}
	};

	return (
		<div>
			<section className="bg-gray-50 dark:bg-background min-h-screen">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<Link
						to="/"
						className="flex items-center mb-6 text-4xl 3xl:text-5xl font-koulen font-bold text-text"
					>
						STREAMSAGE
					</Link>
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-bglight dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Create an account
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								action="#"
								onSubmit={handleSubmit}
							>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
										required
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>
								<div className="flex items-center gap-6">
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											First Name
										</label>
										<input
											type="text"
											name="firstname"
											id="firstname"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="John"
											required
											onChange={(e) => setFirstname(e.target.value)}
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Last Name
										</label>
										<input
											type="text"
											name="lastname"
											id="lastname"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Doe"
											required
											onChange={(e) => setLastname(e.target.value)}
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="terms"
											aria-describedby="terms"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
											required
										/>
									</div>
									<div className="ml-3 text-sm">
										<label
											htmlFor="terms"
											className="font-light text-gray-500 dark:text-gray-300"
										>
											I accept the{" "}
											<a
												className="font-medium text-primary hover:underline dark:text-primary"
												href="https://github.com/Rutetid/StreamSage/blob/main/frontend/T%26C.md"
											>
												Terms and Conditions
											</a>
										</label>
									</div>
								</div>
								<button
									type="submit"
									className="w-full bg-primary hover:bg-primary focus:	ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
								>
									Create an account
								</button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{" "}
									<Link
										to={"/login"}
										className="font-medium text-primary hover:underline dark:text-primary"
									>
										Login here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Signup;
