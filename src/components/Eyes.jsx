import React, { useEffect, useState } from "react";

const Eyes = () => {
	const [Rotate, setRotate] = useState(0);
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseY = e.clientY;
			let mouseX = e.clientX;

			let degree =
				(Math.atan2(
					mouseY - window.innerHeight / 2,
					mouseX - window.innerWidth / 2
				) *
					180) /
				Math.PI;

			setRotate(degree - 180);
			// console.log(Rotate);
		});
	});

	return (
		<div
			data-scroll
			data-scroll-section
			className="mt-[-10vh] w-full h-full overflow-hidden "
		>
			<div
				data-scroll
				data-scroll-section
				data-scroll-speed="-.2"
				className="   w-full h-screen  bg-cover bg-center relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
			>
				<div className="w-[30vw] h-[14vw] absolute flex justify-around top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
					<div className="h-[14vw] flex items-center justify-center w-[14vw] rounded-full  bg-zinc-100">
						<div className="h-[10vw]  w-[10vw]  rounded-full relative bg-zinc-900">
							<div
								style={{
									transform: `translate(-50%,-50%) rotate(${Rotate}deg)`,
								}}
								className={`h-[1vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full rounded-full `}
							>
								<div className="h-[1vw] w-[1vw] rounded-full bg-zinc-200"></div>
							</div>
						</div>
					</div>
					<div className="h-[14vw] flex items-center justify-center w-[14vw] rounded-full  bg-zinc-100">
						<div className="h-[10vw]  w-[10vw]  rounded-full relative bg-zinc-900">
							<div
								style={{
									transform: `translate(-50%,-50%) rotate(${Rotate}deg)`,
								}}
								className="h-[1vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full rounded-full "
							>
								<div className="h-[1vw] w-[1vw] rounded-full bg-zinc-200"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Eyes;
