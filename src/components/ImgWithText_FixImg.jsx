import React from "react";
import { Link } from "react-router-dom";

export const ImgWithText_FixImg = ({
    img1,
    img2,
    titleText,
    subTitleText,
    bodyText,
    btnText,
    btnLink,
}) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-stretch justify-between">
                <div className="w-full md:w-1/2 h-[700px] relative flex items-center justify-center mr-1">
                    <img
                        className="w-full h-full object-cover"
                        src={img1}
                        alt="Raclette Blueberry"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black opacity-10" />{" "}
                        {/* Dim black overlay */}
                        <div className="relative z-10 text-center text-white p-5">
                            <h1 className="text-4xl font-bold mb-2">
                                {titleText}
                            </h1>
                            <h2 className="text-xl mb-5">{subTitleText}</h2>
                            <p className="mb-6 px-10">{bodyText}</p>
                            <Link
                                to={btnLink}
                                className="text-center bg-black text-sm text-white px-6 py-3 rounded-lg transform hover:text-base font-bold duration-300 ease-in-out"
                            >
                                {btnText}
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-fixed bg-cover bg-center w-full md:w-1/2 h-[700px] relative"
                    style={{
                        backgroundImage: `url(${img2})`,
                    }}
                ></div>
            </div>
        </div>
    );
};
