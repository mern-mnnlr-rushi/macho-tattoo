import React, { useEffect, useRef, useState } from "react";
import { Card } from "../components/Card";
import { CardSlider } from "../components/CardSlider";

export const Home = () => {
    const [location, setLocation] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLocationChange = (e) => {
        const selectedLocation = e.target.value;
        setLocation(selectedLocation);
        if (selectedLocation) {
            setIsSidebarOpen(true); // Open sidebar when a location is selected
        } else {
            setIsSidebarOpen(false); // Close sidebar if no location is selected
        }
    };

    const ShowcaseCardData = [
        {
            title: "Raclette Blueberry 1",
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            img: "https://media.istockphoto.com/id/1162623180/photo/process-of-creating-tattoo-in-form-of-black-flower.webp?a=1&b=1&s=612x612&w=0&k=20&c=EwP01t-hhoB5Ydnmm5J1qNWv_F840cAY1lUTPzbehZw=",
            link: "#",
            textTrue: true,
        },
        {
            title: "Raclette Blueberry 2",
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            img: "https://i.pinimg.com/236x/11/4a/b9/114ab900d1acdfdc11c047d22b8d2640.jpg",
            link: "#",
            textTrue: true,
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 3",
            img: "https://cdn.pixabay.com/photo/2015/08/16/12/39/man-890887_640.jpg",
            link: "#",
            textTrue: true,
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 4",
            img: "https://images.unsplash.com/photo-1618232193840-3a4658a0b7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhdHRvc3xlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
            textTrue: true,
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 5",
            img: "https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbHRpcGxlJTIwdGF0dG9vfGVufDB8fDB8fHww",
            link: "#",
            textTrue: true,
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 6",
            img: "https://media.istockphoto.com/id/917893110/photo/laser-tattoo-removal-on-womans-shoulder.jpg?s=612x612&w=0&k=20&c=DGObpscsVGmrgPlk-SFkGyCCpD2FsDWaO-CjNYR6t3A=",
            link: "#",
            textTrue: true,
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 7",
            img: "https://media.istockphoto.com/id/492258714/photo/expert-tattooing-female-customers-lap.jpg?s=612x612&w=0&k=20&c=QRsMP2kkfa9y673NXjh6aM5bZRYSjz0z8ZbhbB_Yab0=",
            link: "#",
            textTrue: true,
        },

        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 8",
            img: "https://media.istockphoto.com/id/492258714/photo/expert-tattooing-female-customers-lap.jpg?s=612x612&w=0&k=20&c=QRsMP2kkfa9y673NXjh6aM5bZRYSjz0z8ZbhbB_Yab0=",
            link: "#",
            textTrue: true,
        },
    ];

    const storyStyle =
        "relative min-w-[300px] h-[300px] flex flex-col mr-2 items-center justify-center shadow-lg";
    const StoryCardData = [
        {
            title: "Raclette Blueberry 1",
            style: storyStyle,
            img: "https://media.istockphoto.com/id/1162623180/photo/process-of-creating-tattoo-in-form-of-black-flower.webp?a=1&b=1&s=612x612&w=0&k=20&c=EwP01t-hhoB5Ydnmm5J1qNWv_F840cAY1lUTPzbehZw=",
            link: "#",
            radius: "rounded-3xl",
            textTrue: true,
        },
        {
            title: "Raclette Blueberry 2",
            style: storyStyle,
            img: "https://i.pinimg.com/236x/11/4a/b9/114ab900d1acdfdc11c047d22b8d2640.jpg",
            link: "#",
            radius: "rounded-3xl",
            textTrue: true,
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 3",
            img: "https://cdn.pixabay.com/photo/2015/08/16/12/39/man-890887_640.jpg",
            link: "#",
            radius: "rounded-3xl",
            textTrue: true,
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 4",
            img: "https://images.unsplash.com/photo-1618232193840-3a4658a0b7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhdHRvc3xlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
            radius: "rounded-3xl",
            textTrue: true,
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 5",
            img: "https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbHRpcGxlJTIwdGF0dG9vfGVufDB8fDB8fHww",
            link: "#",
            radius: "rounded-3xl",
            textTrue: true,
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 6",
            img: "https://media.istockphoto.com/id/917893110/photo/laser-tattoo-removal-on-womans-shoulder.jpg?s=612x612&w=0&k=20&c=DGObpscsVGmrgPlk-SFkGyCCpD2FsDWaO-CjNYR6t3A=",
            link: "#",
            radius: "rounded-3xl",
            textTrue: true,
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 7",
            img: "https://media.istockphoto.com/id/492258714/photo/expert-tattooing-female-customers-lap.jpg?s=612x612&w=0&k=20&c=QRsMP2kkfa9y673NXjh6aM5bZRYSjz0z8ZbhbB_Yab0=",
            link: "#",
            radius: "rounded-3xl",
            textTrue: true,
        },
    ];

    const serviceStyle =
        "relative mt-1 min-w-[400px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg";
    const ServiceCardData = [
        {
            style: serviceStyle,
            content:
                "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "#",
            },
            title: "Raclette Blueberry 1",
            img: "https://media.istockphoto.com/id/1162623180/photo/process-of-creating-tattoo-in-form-of-black-flower.webp?a=1&b=1&s=612x612&w=0&k=20&c=EwP01t-hhoB5Ydnmm5J1qNWv_F840cAY1lUTPzbehZw=",
            textTrue: true,
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 2",
            img: "https://plus.unsplash.com/premium_photo-1664536582165-ef68f40e6e9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF0dG9zfGVufDB8fDB8fHww",
            content:
                "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action",
            },
            textTrue: true,
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 3",
            img: "https://cdn.pixabay.com/photo/2015/08/16/12/39/man-890887_640.jpg",
            content:
                "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action",
            },
            textTrue: true,
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 4",
            img: "https://images.unsplash.com/photo-1618232193840-3a4658a0b7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhdHRvc3xlbnwwfHwwfHx8MA%3D%3D",
            content:
                "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action",
            },
            textTrue: true,
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 5",
            img: "https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbHRpcGxlJTIwdGF0dG9vfGVufDB8fDB8fHww",
            content:
                "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action",
            },
            textTrue: true,
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 6",
            img: "https://media.istockphoto.com/id/917893110/photo/laser-tattoo-removal-on-womans-shoulder.jpg?s=612x612&w=0&k=20&c=DGObpscsVGmrgPlk-SFkGyCCpD2FsDWaO-CjNYR6t3A=",
            content:
                "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action",
            },
            textTrue: true,
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 7",
            img: "https://media.istockphoto.com/id/492258714/photo/expert-tattooing-female-customers-lap.jpg?s=612x612&w=0&k=20&c=QRsMP2kkfa9y673NXjh6aM5bZRYSjz0z8ZbhbB_Yab0=",
            content:
                "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action",
            },
            textTrue: true,
        },
    ];

    const sastersStyle =
        "relative min-w-[350px] h-[500px] flex flex-col items-center justify-center shadow-lg";
    const MastersCardData = [
        {
            title: "Raclette Blueberry 1",
            style: sastersStyle,
            img: "https://images.unsplash.com/photo-1558487661-9d4f01e2ad64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
            textTrue: true,
        },
        {
            title: "Raclette Blueberry 2",
            style: sastersStyle,
            img: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
            textTrue: true,
        },
        {
            style: sastersStyle,
            title: "Raclette Blueberry 3",
            img: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D",
            link: "#",
            textTrue: true,
        },
        {
            style: sastersStyle,
            title: "Raclette Blueberry 4",
            img: "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
            textTrue: true,
        },
        {
            style: sastersStyle,
            title: "Raclette Blueberry 5",
            img: "https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww",
            link: "#",
            textTrue: true,
        },
        {
            style: sastersStyle,
            title: "Raclette Blueberry 6",
            img: "https://images.unsplash.com/photo-1579038773867-044c48829161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
            textTrue: true,
        },
        {
            style: sastersStyle,
            title: "Raclette Blueberry 7",
            img: "https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWFufGVufDB8fDB8fHww",
            link: "#",
            textTrue: true,
        },
    ];

    const rewordStyle =
        "relative min-w-[350px] h-[500px] mr-2 flex flex-col items-center justify-center shadow-lg overflow-hidden";
    const RewordCardData = [
        {
            style: rewordStyle,
            img: "https://i.pinimg.com/236x/08/71/77/0871773b29e862e7bfce328f5a98865e.jpg",
            radius: "rounded-3xl",
            imgStyle: "hover:scale-110 transition-transform duration-1000",
        },
        {
            title: "Raclette Blueberry 2",
            style: rewordStyle,
            img: "https://i.pinimg.com/236x/86/5f/6e/865f6e7beb7edf38d78a7a7198937fb6.jpg",
            link: "#",
            radius: "rounded-3xl",
            imgStyle: "hover:scale-110 transition-transform duration-1000",
        },
        {
            style: rewordStyle,
            title: "Raclette Blueberry 3",
            img: "https://i.pinimg.com/236x/27/73/db/2773db9861727f1bfa130b1dd59524a6.jpg",
            link: "#",
            radius: "rounded-3xl",
            imgStyle: "hover:scale-110 transition-transform duration-1000",
        },
        {
            style: rewordStyle,
            title: "Raclette Blueberry 4",
            img: "https://i.pinimg.com/236x/9f/d6/72/9fd6727d238966f39045ff900b9500e5.jpg",
            link: "#",
            radius: "rounded-3xl",
            imgStyle: "hover:scale-110 transition-transform duration-1000",
        },
        {
            style: rewordStyle,
            title: "Raclette Blueberry 5",
            img: "https://i.pinimg.com/236x/b1/f9/99/b1f99996a18c7c6535b4100d81a82bb0.jpg",
            link: "#",
            radius: "rounded-3xl",
            imgStyle: "hover:scale-110 transition-transform duration-1000",
        },
        {
            style: rewordStyle,
            title: "Raclette Blueberry 6",
            img: "https://i.pinimg.com/236x/dc/5e/c1/dc5ec1e00c854af4dd209f48699847fe.jpg",
            link: "#",
            radius: "rounded-3xl",
            imgStyle: "hover:scale-110 transition-transform duration-1000",
        },
        {
            style: rewordStyle,
            title: "Raclette Blueberry 7",
            img: "https://i.pinimg.com/236x/f4/6b/3c/f46b3cd6938fefdf84045a7f8c3f8a9b.jpg",
            link: "#",
            radius: "rounded-3xl",
            imgStyle: "hover:scale-110 transition-transform duration-1000",
        },
    ];

    return (
        <>
            <section className="relative">
                <img
                    className="w-full h-[700px] px-14 object-cover bg-fixed z-0"
                    src="https://media.istockphoto.com/id/492258714/photo/expert-tattooing-female-customers-lap.jpg?s=612x612&w=0&k=20&c=QRsMP2kkfa9y673NXjh6aM5bZRYSjz0z8ZbhbB_Yab0="
                    alt="image"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Card
                        style="bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                        title={"Raclette Blueberry"}
                        titleBold={"Tattoo Studio"}
                        body={
                            "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
                        }
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
                            'url("https://cdn.pixabay.com/photo/2017/08/11/21/00/tattoo-2632711_640.jpg")',
                    }}
                >
                    <div className="bg-black bg-opacity-10 h-full flex items-center">
                        <Card
                            style="bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                            title={"Raclette Blueberry"}
                            titleBold={"Tattoo Studio"}
                            body={
                                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
                            }
                            btnLink={"#"}
                            whatsappLink={"#"}
                            callLink={"#"}
                        />
                    </div>
                </div>
                <div className="mx-auto py-1">
                    <CardSlider cardData={ShowcaseCardData} />
                </div>
            </section>

            <section className="relative px-14 mt-14">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center font-bold text-3xl">
                        Stories of Tattoos
                    </h1>
                    <p className="text-center px-80">
                        We spotlight the top five stories that highlight our
                        latest artistic achievements, community engagements, and
                        groundbreaking collaborations. Stay connected, stay
                        inspired, and discover the fresh stories that keeps
                        Aliens Tattoo at the forefront of artistic exploration.
                    </p>
                </div>
                <div className="mt-10">
                    <CardSlider cardData={StoryCardData} />
                </div>
            </section>

            <section className="relative px-14 mt-14">
                <div className="flex flex-col md:flex-row items-stretch justify-between">
                    <div className="w-full md:w-1/2 h-[800px] relative flex items-center justify-center mr-1">
                        <img
                            className="w-full h-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1707327144389-e7151b0dd08c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFydCUyMHRhdHRvbyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                            alt="Raclette Blueberry"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-10" />{" "}
                            {/* Dim black overlay */}
                            <div className="relative z-10 text-center text-white p-5">
                                <h1 className="text-4xl font-bold mb-4">
                                    Let’s bring{" "}
                                    <span className="text-black">your</span>{" "}
                                    vision to life
                                </h1>
                                <h2 className="text-2xl mb-4">
                                    Tattoo Design Service by Aliens
                                </h2>
                                <p className="mb-6">
                                    Aliens Tattoo crafts your personalized
                                    design, setting no limits on where you bring
                                    it to life. Receive a bespoke masterpiece
                                    from us, ready for inking by any artist,
                                    anywhere in the world.
                                </p>
                                <button className="bg-black text-white px-6 py-2 rounded">
                                    Book an Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[800px] relative">
                        <img
                            className="w-full h-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1707057704991-1f0cec6e9a3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwdGF0dG9vJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Artistic Tattoo"
                        />
                    </div>
                </div>
                <CardSlider cardData={ServiceCardData} />
            </section>

            <section className="relative px-14 mt-14">
                <div className="flex flex-col md:flex-row items-stretch justify-between">
                    <div className="w-full md:w-1/2 h-[700px] relative flex items-center justify-center mr-1">
                        <img
                            className="w-full h-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1708126176305-b8edcffd0525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGFydCUyMHRhdHRvbyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                            alt="Raclette Blueberry"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-10" />{" "}
                            {/* Dim black overlay */}
                            <div className="relative z-10 text-center text-white p-5">
                                <h1 className="text-4xl font-bold mb-2">
                                    Express Yourself
                                </h1>
                                <h2 className="text-xl mb-5">
                                    Piercings by Client
                                </h2>
                                <p className="mb-6 px-10">
                                    Aliens offers expert piercing services that
                                    blend safety with style, ensuring each piece
                                    not only enhances your look but also
                                    expresses your unique identity.
                                </p>
                                <button className="bg-black text-white px-6 py-2 rounded">
                                    Book an Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-fixed bg-cover bg-center w-full md:w-1/2 h-[700px] relative"
                        style={{
                            backgroundImage:
                                'url("https://plus.unsplash.com/premium_photo-1698046366833-6591925f51ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHxhcnQlMjB0YXR0b28lMjBnaXJsfGVufDB8fDB8fHww")',
                        }}
                    ></div>
                </div>
            </section>

            <section className="relative mt-10">
                <img
                    className="w-full h-[700px] px-14 object-cover bg-fixed z-0"
                    src="https://images.unsplash.com/photo-1623118176012-9b0c6fa0712d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvbGxhciUyMGFydHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="image"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Card
                        style="bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                        title={"Tattoo Now"}
                        titleBold={"Pay Later"}
                        body={
                            "You can now choose to pay later in easy monthly instalments through our Aliens Payment Plans. No Charges,No Interest,Instant Approvals."
                        }
                        btnLink={"#"}
                        whatsappLink={"#"}
                        callLink={"#"}
                    />
                </div>
            </section>

            <section className="relative mt-10 px-14">
                <div className="w-full md:w-full h-[700px] relative flex items-center justify-center mr-1">
                    <img
                        className="w-full h-full object-cover"
                        src="https://media.istockphoto.com/id/1269503007/photo/the-new-normal-after-covid-19-pandemic.jpg?s=612x612&w=0&k=20&c=IcONPYUJZ7UoOgIBz6rZOQ099-PwEAtg0MGKYyvFVNg="
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black opacity-10" />{" "}
                        {/* Dim black overlay */}
                        <div className="relative z-10 text-center text-white p-5">
                            <h1 className="text-4xl font-bold mb-2">
                                Your art is secured for life, thats our promise!
                            </h1>
                            <h2 className="text-xl mb-5">
                                Life time tattoo protection.
                            </h2>
                            <p className="mb-6 px-10">
                                Aliens offers expert piercing services that
                                blend safety with style, ensuring each piece not
                                only enhances your look but also expresses your
                                unique identity.
                            </p>
                            <button className="bg-black text-white px-6 py-2 rounded">
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mt-10 px-14">
                <div className="w-full md:w-full h-[700px] relative flex items-center justify-center">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1530099486328-e021101a494a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHRlYW0lMjBncm91cHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Card
                            style="bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                            title={"Masters of"}
                            titleBold={"Ink"}
                            subText={"Not just Artists, but storytellers"}
                            body={
                                "At the heart of Aliens Tattoo, our world-class artists are maestros of ink who create award-winning art that speaks volumes. Being renowned storytellers, our creativity and skills are unmatched, making us leaders in the tattoo industry."
                            }
                            btnLink={"#"}
                            whatsappLink={"#"}
                            callLink={"#"}
                        />
                    </div>
                </div>
                <div className="mx-auto py-1">
                    <CardSlider cardData={MastersCardData} />
                </div>
            </section>

            <section className="relative mt-10 px-14">
                <div className="w-full md:w-full h-[950px] relative flex items-center justify-center mr-1">
                    <img
                        className="w-full h-full object-cover"
                        src="https://cdn.pixabay.com/photo/2020/10/17/15/55/coins-5662551_640.jpg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black opacity-10" />{" "}
                        {/* Dim black overlay */}
                        <div className="relative z-10 text-center text-white p-5">
                            <h2 className="text-8xl font-bold mb-2">
                                Your Rewards
                            </h2>
                            <h2 className="text-teal-400 text-lg font-mono mb-5">
                                Offers & Discounts
                            </h2>
                            <p className="text-7xl mb-6 px-10">
                                You loyalty rewarded gracefully!
                            </p>
                            <button className="bg-black text-white px-6 py-2 rounded">
                                Explore Rewards
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mt-10 px-14">
                <CardSlider cardData={RewordCardData} />
            </section>

            <section className="relative mt-10 px-14">
                <div
                    className="bg-fixed bg-cover bg-center h-[900px]"
                    style={{
                        backgroundImage:
                            'url("https://imgs.search.brave.com/RMJCKC_11CF08tzW72O2-OByycEcJZCEsMarVihb2mU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MTU1NzI0Ny9waG90/by9zdWNjZXNzZnVs/LXBhcnRuZXJzaGlw/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1kdW9PZTUwM1Va/RUN3M2ZockNJeUlu/aFAxRkgwWVJwQ1N2/eVJ1NlVHNVlBPQ")',
                    }}
                >
                    <div className="bg-black bg-opacity-10 h-full flex items-center">
                        <Card
                            style="bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                            titleBold={"Alliance of Artistry"}
                            subText={"Partnering with the World Leaders"}
                            body={
                                "Through strategic collaborations with leading global brands, Aliens Tattoo elevates the intersection of art and commerce, blending tattoo artistry with iconic brand narratives to create unique cultural expressions."
                            }
                            btnLink={"#"}
                            whatsappLink={"#"}
                            callLink={"#"}
                        />
                    </div>
                </div>
            </section>

            <section className="relative mt-10 px-14">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl mb-5">
                        Aliens are <span className="font-bold">Everywhere</span>
                    </h1>
                    <p className="text-lg font-normal text-center px-96">
                        Aliens Tattoo ensures world-class artistry is always
                        within your reach, demonstrating our commitment to you
                        by bringing our tattoo studios closer to your world.
                        Choose the nearest location and embrace the exceptional
                        care and creativity waiting just around the corner.
                    </p>
                </div>
                <div className="flex mt-5 items-center justify-center">
                    <form>
                        <select
                            id="options"
                            name="options"
                            className="px-6 py-4 border border-solid border-black rounded-xl"
                            onChange={handleLocationChange} // Call the function to handle location change
                        >
                            <option value="" defaultValue>
                                Select Your Location
                            </option>
                            <option value="mumbai">Mumbai</option>
                            <option value="delhi">Delhi</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="chennai">Chennai</option>
                            <option value="kolkata">Kolkata</option>
                        </select>
                    </form>
                </div>

                {/* Sidebar */}
                {isSidebarOpen && (
                    <div className="fixed top-0 right-0 w-[600px] h-full bg-white shadow-lg p-5">
                        <div className="flex flex-row items-center justify-between">
                            <h2 className="text-xl font-normal">
                                Selected Location: {location}
                            </h2>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="bg-gray-500 py-2 ml-2 px-2 rounded-full focus:outline-none hover:bg-gray-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p>Here is some information about {location}...</p>
                    </div>
                )}
            </section>
        </>
    );
};
