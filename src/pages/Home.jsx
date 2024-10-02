import React, { useRef } from "react";
import { Card } from "../components/Card";

export const Home = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <>
            <section className="relative">
                <img
                    className="w-full h-[700px] px-14 object-cover bg-fixed z-0"
                    src="https://images.unsplash.com/photo-1479767574301-a01c78234a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF0dG9vfGVufDB8fDB8fHww"
                    alt="image"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Card
                        title={"Raclette Blueberry"}
                        titleBold={"Tattoo Studio"}
                        body={
                            "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
                        }
                        bgColor={"bg-white"}
                        btnLink={"#"}
                        whatsappLink={"#"}
                        callLink={"#"}
                    />
                </div>
            </section>

            <section className="relative px-14 mt-14">
                <div
                    className="bg-fixed bg-cover bg-center h-[900px]"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbHRpcGxlJTIwdGF0dG9vfGVufDB8fDB8fHww")',
                    }}
                >
                    <div className="bg-black bg-opacity-50 h-full flex items-center">
                        <Card
                            title={"Raclette Blueberry"}
                            titleBold={"Tattoo Studio"}
                            body={
                                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
                            }
                            bgColor={"bg-white"}
                            btnLink={"#"}
                            whatsappLink={"#"}
                            callLink={"#"}
                        />
                    </div>
                </div>
                <div className="container mx-auto py-8 ">
                    <div className="relative ">
                        {/* Left Arrow */}
                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white opacity-30 p-2 rounded-full shadow-lg"
                            onClick={scrollLeft}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path
                                        fill="black"
                                        d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.122 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122l-5.66-5.658Z"
                                    />
                                </g>
                            </svg>
                        </button>

                        {/* Slider Container */}
                        <div
                            ref={sliderRef}
                            className="flex gap-4 scrollbar-hide overflow-x-hidden scroll-smooth"
                        >
                            <div className="min-w-[300px] h-[200px] bg-teal-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                                Card 1
                            </div>
                            <div className="min-w-[300px] h-[200px] bg-teal-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                                Card 2
                            </div>
                            <div className="min-w-[300px] h-[200px] bg-teal-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                                Card 3
                            </div>
                            <div className="min-w-[300px] h-[200px] bg-teal-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                                Card 4
                            </div>
                            <div className="min-w-[300px] h-[200px] bg-teal-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                                Card 5
                            </div>
                            <div className="min-w-[300px] h-[200px] bg-teal-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                                Card 5
                            </div>
                            <div className="min-w-[300px] h-[200px] bg-teal-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                                Card 5
                            </div>
                            <div className="min-w-[300px] h-[200px] bg-teal-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                                Card 5
                            </div>
                            <div className="min-w-[300px] h-[200px] bg-teal-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                                Card 5
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white opacity-30 p-2 rounded-full shadow-lg"
                            onClick={scrollRight}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path
                                        fill="black"
                                        d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
