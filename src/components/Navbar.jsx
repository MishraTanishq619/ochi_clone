import React from "react";

const Navbar = () => {
	return (
		<div className="w-full fixed z-[999] flex px-8 py-5 justify-around items-center">
			<div>Logo</div>
			<div className="flex gap-9">
				{[
					"Services",
					"Our Works",
					"About Us",
					"Insights",
					"Contact",
				].map((i, k) => {
					return (
						<a
							key={k}
							href=""
							className={`capitalize text-lg font-semibold ${
								k === 4 && "ml-32"
							}`}
						>
							{i}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
