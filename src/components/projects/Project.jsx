import React, { useState, useEffect} from "react";
import "./project.css";
import Animation from "../../helpers/Animation"

export default function Project({data}) {
	const [waveBorder, setWaveBorder] = useState("border-blue-500");
	const [isHovered, setIsHovered] = useState(false);
	const colors = [
		"border-blue-500",
		"border-red-500",
		"border-green-500",
		"border-yellow-500",
		"border-purple-500",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			const randomColor =
				colors[Math.floor(Math.random() * colors.length)];
			setWaveBorder(randomColor);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	

	return (
		<Animation before="scale-[0.8] opacity-0 " after="scale-[1] opacity-1" duration="1s">
		<div
			className={`  ${
				isHovered ? waveBorder : "  "
			} button transition-all duration-[1s] ease-in-out flex flex-col md:p-2 border-2 border-[#0f172a] rounded-lg gap-2 cursor-pointer  `}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<div className="images overflow-hidden rounded-lg">
				<img src={`/assets/img/cover/${data.cover}`} />
			</div>
			<div className="text-[1.4em] px-2 uppercase ">{data.title}</div>
			<div className="px-2">{data.desc}</div>
			<div className="actions px-2 flex  items-center gap-4">
			<a href={data.hostURL} >
				<div className=" button1
				bg-[#1e293b] 
					duration-500
 					p-2 
 					border 
 					mb-2
 					 rounded-lg ">
					Live Demo
				</div>
				</a>
				<a href={data.gitURL} >
				<div
					className="
					button2
					bg-[#1e293b]
					
					duration-500
 					p-2 
 					border 
 					mb-2
 					 rounded-lg "
				>
					Code
				</div>
				</a>
				
			</div>
		</div>
		</Animation>
	);
}
