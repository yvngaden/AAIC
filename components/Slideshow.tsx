import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

const Slideshow = () => {


	const images = [
		"/insidemasjid.jpeg",
		"/aboutpic01.jpg",
		"/aboutPic02.jpg",
		"/aboutPic03.jpeg",
		"/AboutPic04.jpeg",
		"/aboutPic05.jpeg",
		"/aboutPic06.jpeg",
		"/aboutPic07.jpeg",
		"/aboutPic08.jpg",
	];

	const zoomInProperties = {
		indicators: true,
		scale: 1,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};
	return (
		<div className=" ">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<Image
							className="md:w-full 2xl:w-full h-screen object-cover rounded-lg shadow-xl"
							src={each}
							alt={`Image ${index + 1}`}
							width={1000}
							height={500}
						/>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;