import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
			<div>
				<section className="bg-gray-50 dark:bg-background">
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
								<form className="space-y-4 md:space-y-6" action="#">
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
										/>
									</div>
									<div className='flex items-center gap-6'>
										<div>
											<label
												htmlFor="email"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												First Name
											</label>
											<input
												type="text"
												name="fname"
												id="fname"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="John"
												required
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
												name="lname"
												id="lname"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="Doe"
												required
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
										/>
									</div>
									<div>
										<label
											htmlFor="confirm-password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Confirm password
										</label>
										<input
											type="password"
											name="confirm-password"
											id="confirm-password"
											placeholder="••••••••"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-text dark:border-gray-600 dark:placeholder-gray-400 dark:text- dark:focus:ring-blue-500 dark:focus:border-blue-500"
											required
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
													href="#"
												>
													Terms and Conditions
												</a>
											</label>
										</div>
									</div>
									<button
										type="submit"
										className="w-full bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
									>
										Create an account
									</button>
									<p className="text-sm font-light text-gray-500 dark:text-gray-400">
										Already have an account?{" "}
										<a
											href="#"
											className="font-medium text-primary hover:underline dark:text-primary"
										>
											Login here
										</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
}

export default Signup