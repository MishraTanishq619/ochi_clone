import React from "react";

const About = () => {
	return (
		<div
			// data-scroll
			className=" mt-[-160px] bg-[#CDEA68] pt-20 rounded-t-2xl"
		>
			<h2 className="p-20 w-4/5 text-5xl tracking-tighter text-black">
				Ochi is a strategic partner for fast-growing tech businesses
				that need to raise funds, sell products, explain complex ideas,
				and hire great people.
			</h2>
			<hr />
			<div className="w-full flex justify-center gap-6 p-10">
				<div className="w-1/2  h-96 text-black">
					<h2 className="text-6xl p-5">Our Approach:</h2>
					<button className="m-3 flex bg-black text-white px-6 py-4 rounded-full gap-4 items-center">
						<p>Read More</p>
						<div className="h-3 w-3 bg-white rounded-full"></div>
					</button>
				</div>
				<div className="w-1/2 bg-[#8ea147] h-96 rounded-3xl"></div>
			</div>
		</div>
	);
};

export default About;
