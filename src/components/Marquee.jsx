import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed=".1"
			className="bg-[#004D43] flex items-center w-full  rounded-3xl"
		>
			<div className="flex  w-full py-4  border-y-2 my-20   overflow-hidden whitespace-nowrap">
				<motion.h2
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						ease: "linear",
						repeatType: "loop",
						repeat: Infinity,
						duration: 3,
					}}
					className=" text-[15vh] leading-none w-full text-nowrap"
				>
					We are Ochi
				</motion.h2>
				<motion.h2
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						ease: "linear",
						repeatType: "loop",
						repeat: Infinity,
						duration: 3,
					}}
					className=" text-[15vh] leading-none w-full text-nowrap"
				>
					We are Ochi
				</motion.h2>
				<motion.h2
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						ease: "linear",
						repeatType: "loop",
						repeat: Infinity,
						duration: 3,
					}}
					className=" text-[15vh] leading-none w-full text-nowrap"
				>
					We are Ochi
				</motion.h2>
				<motion.h2
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						ease: "linear",
						repeatType: "loop",
						repeat: Infinity,
						duration: 3,
					}}
					className=" text-[15vh] leading-none w-full text-nowrap"
				>
					We are Ochi
				</motion.h2>
			</div>
		</div>
	);
};

export default Marquee;
