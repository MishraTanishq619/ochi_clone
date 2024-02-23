import { delay, motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
	const anim = [useAnimation(), useAnimation()];

	const handleAnimation = (i) => {
		anim[i].start({
			y: "0",
			// transition: { duration: 0.2 },
		});
	};

	const handleAnimationEnd = (i) => {
		anim[i].start({
			y: "100%",
			// transition: { duration: 0.2 },
		});
	};
	return (
		<div className="bg-zinc-900 pt-20  w-full">
			<h2 className="text-6xl p-10   border-b-2">Featured Projects</h2>
			<div className="w-full flex gap-5 p-10">
				<div
					onMouseEnter={() => handleAnimation(0)}
					onMouseLeave={() => handleAnimationEnd(0)}
					className="w-1/2 relative h-[40rem]  p-6  bg-red-400  rounded-3xl"
				>
					<div className="absolute flex overflow-hidden z-[9] top-1/2 text-6xl  left-full -translate-x-1/2 -translate-y-1/2">
						{"First".split("").map((i, k) => {
							return (
								<motion.h2
									initial={{ y: "100%" }}
									animate={anim[0]}
									transition={{ delay: k * 0.05 }}
									className=""
								>
									{i}
								</motion.h2>
							);
						})}
					</div>
					<div className=" w-full h-full rounded-3xl m-1 bg-green-400"></div>
				</div>
				<div
					onMouseEnter={() => handleAnimation(1)}
					onMouseLeave={() => handleAnimationEnd(1)}
					className="w-1/2 relative h-[40rem]  p-6  bg-red-400  rounded-3xl"
				>
					<div className="absolute flex overflow-hidden z-[9] top-1/2 text-6xl  right-full translate-x-1/2 -translate-y-1/2">
						{"Second".split("").map((i, k) => {
							return (
								<motion.h2
									initial={{ y: "100%" }}
									animate={anim[1]}
									transition={{ delay: k * 0.05 }}
									className=""
								>
									{i}
								</motion.h2>
							);
						})}
					</div>
					<div className=" w-full h-full rounded-3xl m-1 bg-green-400"></div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
