import React from "react";
import { Link } from "react-router-dom";
import { CardSlider } from "./CardSlider";

export const DualImage_CardSlider = ({
    img1,
    img2,
    titleStart,
    titleBoldCenter,
    titleEnd,
    subTitle,
    bodyText,
    btnText,
    btnLink,
    cardSliderData,
}) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-stretch justify-between">
                <div className="w-full md:w-1/2 h-[800px] relative flex items-center justify-center mr-1">
                    <img
                        className="w-full h-full object-cover"
                        src={img1}
                        alt="Raclette Blueberry"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black opacity-10" />{" "}
                        {/* Dim black overlay */}
                        <div className="relative z-10 text-center text-white p-5">
                            <h1 className="text-4xl font-bold mb-4">
                                {titleStart}{" "}
                                <span className="text-black">
                                    {titleBoldCenter}
                                </span>
                                {titleEnd}
                            </h1>
                            <h2 className="text-2xl mb-4">{subTitle}</h2>
                            <p className="mb-6">{bodyText}</p>
                            <Link
                                to={btnLink}
                                className="text-center bg-black text-sm text-white px-6 py-3 rounded-lg transform hover:text-base font-bold duration-300 ease-in-out"
                            >
                                {btnText}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-[800px] relative">
                    <img
                        className="w-full h-full object-cover"
                        src={img2}
                        alt="Artistic Tattoo"
                    />
                </div>
            </div>
            <CardSlider cardData={cardSliderData} />
        </div>
    );
};
