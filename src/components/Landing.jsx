import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Landing = () => {
	return (
		<div
			data-scroll
			data-scroll-speed="-.2"
			className="bg-zinc-900 w-full h-screen "
		>
			<div className="flex flex-col uppercase py-40 px-20 text-9xl leading-[102px] tracking-tighter font-serif font-extrabold">
				<div>We Create</div>
				<div className=" flex items-center">
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: "7vw" }}
						transition={{
							type: "spring",
							bounce: 0.8,
							repeat: Infinity,
							duration: 3,
						}}
						className="w-[7vw] h-[10vh] bg-red-400"
					></motion.div>
					<div>Eye Opening</div>
				</div>
				<div>Presentations</div>
			</div>
			<hr />
			<div className="flex justify-between items-center py-6 px-10">
				<p>For public and private companies</p>
				<p>From the first pitch to IPO</p>
				<div className="">
					<button className="btnhovercls mx-1 p-1 px-3 border-2 rounded-full hover:text-black hover:bg-white">
						Start The Project
					</button>
					<button className="btnhovercls mx-1 p-1 px-3 border-2 rounded-full hover:text-black hover:bg-white">{`>`}</button>
				</div>
			</div>
		</div>
	);
};

export default Landing;
