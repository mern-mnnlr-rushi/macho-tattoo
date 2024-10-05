import React from "react";
import { Link } from "react-router-dom";

export const TextOnImg = ({
    img,
    titleText,
    subTitleTextColored,
    bodyText,
    btnText,
    btnLink,
}) => {
    return (
        <div>
            <div className="w-full md:w-full h-[950px] relative flex items-center justify-center mr-1">
                <img className="w-full h-full object-cover" src={img} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-10" />{" "}
                    {/* Dim black overlay */}
                    <div className="relative z-10 text-center text-white p-5">
                        <h2 className="text-8xl font-bold mb-2">{titleText}</h2>
                        <h2 className="text-teal-400 text-lg font-mono mb-5">
                            {subTitleTextColored}
                        </h2>
                        <p className="text-7xl mb-6 px-10">{bodyText}</p>
                        <Link
                            to={btnLink}
                            className="text-center bg-black text-sm text-white px-6 py-3 rounded-lg transform hover:text-base font-bold duration-300 ease-in-out"
                        >
                            {btnText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
