import React, { useRef } from "react";
import { Link } from "react-router-dom";

export const CardSlider = ({ cardData }) => {
    const sliderRef = useRef(null);  // Reference for the slider

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -250, // Adjust this value based on card width
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 250, // Adjust this value based on card width
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative">
            {/* Left Arrow */}
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
                onClick={scrollLeft}
                style={{ pointerEvents: 'auto' }} // Ensure button receives clicks
            >
                {/* Your left arrow SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0z" />
                        <path fill="black" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.122 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122l-5.66-5.658Z" />
                    </g>
                </svg>
            </button>

            {/* Slider Container */}
            <div
                ref={sliderRef}
                className="flex gap-1 overflow-x-hidden scroll-smooth"
            >
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`${card.style} relative cursor-pointer`} // Add cursor pointer for the entire card
                        onClick={() => window.location.href = card.link} // Navigate on card click
                    >
                        <img
                            className={`w-full h-full object-cover`}
                            src={card.img}
                            alt={card.title}
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-50 rounded-sm p-3">
                            {/* Title at the bottom left */}
                            <div className="text-white font-bold text-wrap text-xl">{card.title}</div>

                            {/* Conditionally render content and button in a column at the bottom left */}
                            <div className="flex flex-col items-start mt-2">
                                {card.content && (
                                    <div className="text-white mb-1">
                                        {card.content}
                                    </div>
                                )}
                                {card.button && (
                                    <Link
                                        to={card.button.link}
                                        className="bg-white text-black rounded-md px-5 py-2"
                                    >
                                        {card.button.text}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
                onClick={scrollRight}
                style={{ pointerEvents: 'auto' }} // Ensure button receives clicks
            >
                {/* Your right arrow SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0z" />
                        <path fill="black" d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z" />
                    </g>
                </svg>
            </button>
        </div>
    );
};
