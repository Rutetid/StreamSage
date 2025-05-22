import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"https://streamsage0.onrender.com/api/v1/user/signin",
				{
					username,
					password,
				},
			);
			localStorage.setItem("token", response.data.token);

			if (response.status === 200) {
				navigate("/homepage");
				alert("Login Successful");
			} else {
				alert("Login Failed");
			}
		} catch (error) {
			console.error("There was an error!", error);
			alert("An error occurred during login.");
		}
	};

	return (
		<div className="min-h-screen flex flex-col">
			<section className="bg-gray-50 dark:bg-background flex-1 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-md space-y-8">
					<div className="text-center">
						<Link to="/" className="inline-block">
							<h1 className="text-3xl sm:text-4xl 3xl:text-5xl font-koulen font-bold text-text mt-6 mb-6">
								STREAMSAGE
							</h1>
						</Link>
						<h2 className="mt-4 text-xl sm:text-2xl font-bold text-text">
							Login to your account
						</h2>
						<p className="mt-2 text-sm text-gray-400">
							Access your watchlist and favorites
						</p>
					</div>

					<div className="mt-8 bg-bglight sm:rounded-lg shadow-md px-4 py-6 sm:px-8 sm:py-8 border border-gray-800">
						<form className="space-y-5" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-200 mb-1"
								>
									Email address
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none block w-full px-3 py-3 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 bg-gray-800 text-white focus:outline-none focus:ring-primary focus:border-primary text-sm"
										placeholder="you@example.com"
										onChange={(e) => setUsername(e.target.value)}
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-200 mb-1"
								>
									Password
								</label>
								<div className="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="appearance-none block w-full px-3 py-3 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 bg-gray-800 text-white focus:outline-none focus:ring-primary focus:border-primary text-sm"
										placeholder="••••••••"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-primary focus:ring-primary border-gray-600 rounded bg-gray-700"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-gray-300"
									>
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a
										href="/"
										className="font-medium text-primary hover:text-primary/80"
									>
										Forgot password?
									</a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-colors duration-200"
								>
									Sign in
								</button>
							</div>
						</form>

						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-700" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-bglight text-gray-400">
										New to StreamSage?
									</span>
								</div>
							</div>

							<div className="mt-6 text-center">
								<Link
									to="/signup"
									className="font-medium text-primary hover:text-primary/80"
								>
									Create an account
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
