import React from 'react'

const SampleCard = ({img , genre}) => {
  return (
			<div className=" ">
				<img
					src={img}
					alt=""
					className="w-64 h-96 3xl:w-80 3xl:h-auto object-cover"
				/>
				<div className="pt-4 3xl:w-80 3xl:h-auto">
					<span className="text-text text-2xl 3xl:text-3xl font-poppins font-semibold ">
						{genre}
					</span>

					<p className="text-text text-md 3xl:text-lg font-poppins font-semibold pt-2 ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
						quidem
					</p>
				</div>
			</div>
		);
}


export default SampleCard