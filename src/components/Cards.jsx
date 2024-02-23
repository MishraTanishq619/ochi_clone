import React from "react";

const Cards = () => {
	return (
		<div className="flex gap-6 p-20 bg-zinc-950">
			<div className="h-[50vh] flex items-center justify-center rounded-3xl w-1/2 bg-green-600">
				<h2 className="text-7xl font-bold">Ochi</h2>
			</div>
			<div className="h-[50vh] flex items-center justify-center rounded-3xl w-1/4 bg-zinc-800">
				<h2 className="text-7xl font-bold">Cluch</h2>
			</div>
			<div className="h-[50vh] flex items-center justify-center rounded-3xl w-1/4 bg-slate-700">
				<h2 className="text-7xl font-bold">Img</h2>
			</div>
		</div>
	);
};

export default Cards;
