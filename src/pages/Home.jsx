import React, { useState } from "react";
import { CardSlider } from "../components/CardSlider";
import { ImgAndCard } from "../components/ImgAndCard";
import { FixImg_Card_CardSlider } from "../components/FixImg_Card_CardSlider";
import { DualImage_CardSlider } from "../components/DualImage_CardSlider";
import { ImgWithText_FixImg } from "../components/ImgWithText_FixImg";
import { TextOnImg } from "../components/TextOnImg";
import { Link } from "react-router-dom";
import { ImgAndCard_CardSlider } from "../components/ImgAndCard_CardSlider";
import { FixImg_Card } from "../components/FixImg_Card";

export const Home = () => {
    const [location, setLocation] = useState("none"); // Default value for the dropdown
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLocationChange = (e) => {
        const selectedLocation = e.target.value;
        setLocation(selectedLocation);
        if (selectedLocation !== "none") {
            setIsSidebarOpen(true); // Open the sidebar when a location is selected
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
                <ImgAndCard
                    img={
                        "https://media.istockphoto.com/id/492258714/photo/expert-tattooing-female-customers-lap.jpg?s=612x612&w=0&k=20&c=QRsMP2kkfa9y673NXjh6aM5bZRYSjz0z8ZbhbB_Yab0="
                    }
                    cardStyle="bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                    cardTitle={"Raclette Blueberry"}
                    cardTitleBold={"Tattoo Studio"}
                    cardBody={
                        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
                    }
                    cardBtnLink={"#"}
                    cardWhatsappLink={"#"}
                    cardCallLink={"#"}
                />
            </section>

            <section className="relative px-14 mt-14">
                <FixImg_Card_CardSlider
                    fixImg={
                        "https://imgs.search.brave.com/PZVn1hbkXcjSDSyGJKqHOMR16pFUOVsM8g2y7uMu8n0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS9m/NzMyNTBfNGM2Y2Fl/Mzk2YWMxNDNjOThj/NzZlNmMyYTFkM2Y4/NDF-bXYyLndlYnAv/djEvZmlsbC93XzQ4/MCxoXzM2MCxmcF8w/LjVfMC41NyxxXzkw/L2Y3MzI1MF80YzZj/YWUzOTZhYzE0M2M5/OGM3NmU2YzJhMWQz/Zjg0MX5tdjIud2Vi/cA"
                    }
                    cardStyle="bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                    cardTitle={"Raclette Blueberry"}
                    cardTitleBold={"Tattoo Studio"}
                    cardBody={
                        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
                    }
                    cardBtnLink={"#"}
                    cardWhatsappLink={"#"}
                    cardCallLink={"#"}
                    cardSliderData={ShowcaseCardData}
                />
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
                <DualImage_CardSlider
                    img1={
                        "https://plus.unsplash.com/premium_photo-1707327144389-e7151b0dd08c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFydCUyMHRhdHRvbyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                    }
                    img2={
                        "https://plus.unsplash.com/premium_photo-1707057704991-1f0cec6e9a3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwdGF0dG9vJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    titleStart={"Let’s bring"}
                    titleBoldCenter={"your"}
                    titleEnd={"vision to life"}
                    subTitle={"Tattoo Design Service by Aliens"}
                    bodyText={
                        "Aliens Tattoo crafts your personalized design, setting no limits on where you bring it to life. Receive a bespoke masterpiece from us, ready for inking by any artist, anywhere in the world."
                    }
                    btnText={"Book an Appointment"}
                    btnLink={"#"}
                    cardSliderData={ServiceCardData}
                />
            </section>

            <section className="relative px-14 mt-14">
                <ImgWithText_FixImg
                    img1={
                        "https://plus.unsplash.com/premium_photo-1708126176305-b8edcffd0525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGFydCUyMHRhdHRvbyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                    }
                    img2={
                        "https://plus.unsplash.com/premium_photo-1698046366833-6591925f51ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHxhcnQlMjB0YXR0b28lMjBnaXJsfGVufDB8fDB8fHww"
                    }
                    titleText={"Express Yourself"}
                    subTitleText={"Piercings by Client"}
                    bodyText={
                        "Aliens offers expert piercing services that blend safety with style, ensuring each piece not only enhances your look but also expresses your unique identity."
                    }
                    btnText={"Book an Appointment"}
                    btnLink={"#"}
                />
            </section>

            <section className="relative mt-10">
                <ImgAndCard
                    img={
                        "https://images.unsplash.com/photo-1623118176012-9b0c6fa0712d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvbGxhciUyMGFydHxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    cardStyle="bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                    cardTitle={"Tattoo Now"}
                    cardTitleBold={"Pay Later"}
                    cardBody={
                        "You can now choose to pay later in easy monthly instalments through our Aliens Payment Plans. No Charges,No Interest,Instant Approvals."
                    }
                    cardBtnLink={"#"}
                    cardWhatsappLink={"#"}
                    cardCallLink={"#"}
                />
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
                            <h1 className="text-5xl font-bold mb-2">
                                Your art is secured for life, thats our promise!
                            </h1>
                            <h2 className="text-lg mb-10 text-green-400">
                                Life time tattoo protection.
                            </h2>
                            <p className="mb-10 px-44 text-2xl">
                                Aliens offers expert piercing services that
                                blend safety with style, ensuring each piece not
                                only enhances your look but also expresses your
                                unique identity.
                            </p>
                            <Link
                                to="#"
                                className="text-center bg-black text-sm text-white px-6 py-3 rounded-lg transform hover:text-base font-bold duration-300 ease-in-out"
                            >
                                Book an Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mt-10 px-14">
                <ImgAndCard_CardSlider
                    img={
                        "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHRlYW0lMjBncm91cHxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    cardStyle={
                        "bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                    }
                    titleText={"Masters of"}
                    boldText={"Ink"}
                    subText={"Not just Artists, but storytellers"}
                    bodyText={
                        "At the heart of Aliens Tattoo, our world-class artists are maestros of ink who create award-winning art that speaks volumes. Being renowned storytellers, our creativity and skills are unmatched, making us leaders in the tattoo industry."
                    }
                    btnLink={"#"}
                    wantsappLink={"#"}
                    callLink={"#"}
                    cardSliderData={MastersCardData}
                />
            </section>

            <section className="relative mt-10 px-14">
                <TextOnImg
                    img={
                        "https://cdn.pixabay.com/photo/2020/10/17/15/55/coins-5662551_640.jpg"
                    }
                    titleText={"Your Rewards"}
                    subTitleTextColored={"Offers & Discounts"}
                    bodyText={"You loyalty rewarded gracefully!"}
                    btnText={"Explore Rewards"}
                    btnLink={"#"}
                />
            </section>

            <section className="relative mt-10 px-14">
                <CardSlider cardData={RewordCardData} />
            </section>

            <section className="relative mt-10 px-14">
                <FixImg_Card
                    img={
                        "https://imgs.search.brave.com/RMJCKC_11CF08tzW72O2-OByycEcJZCEsMarVihb2mU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MTU1NzI0Ny9waG90/by9zdWNjZXNzZnVs/LXBhcnRuZXJzaGlw/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1kdW9PZTUwM1Va/RUN3M2ZockNJeUlu/aFAxRkgwWVJwQ1N2/eVJ1NlVHNVlBPQ"
                    }
                    cardStyle={
                        "bg-white h-full bg-opacity-75 px-9 py-20 rounded-lg overflow-hidden text-start relative z-10"
                    }
                    titleTextBold={"Alliance of Artistry"}
                    subText={"Partnering with the World Leaders"}
                    bodyText={
                        "Through strategic collaborations with leading global brands, Aliens Tattoo elevates the intersection of art and commerce, blending tattoo artistry with iconic brand narratives to create unique cultural expressions."
                    }
                    btnLink={"#"}
                    whatsappLink={"#"}
                    callLink={"#"}
                />
            </section>

            <section className="relative mt-10 px-14">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl mb-5">
                        We are <span className="font-bold">Everywhere</span>
                    </h1>
                    <p className="text-lg font-normal text-center px-96">
                        Our Tattoo ensures world-class artistry is always within
                        your reach, demonstrating our commitment to you by
                        bringing our tattoo studios closer to your world. Choose
                        the nearest location and embrace the exceptional care
                        and creativity waiting just around the corner.
                    </p>
                </div>
                <div className="flex mt-5 items-center justify-center">
                    <form>
                        <select
                            id="options"
                            name="options"
                            className="px-6 py-4 border border-solid border-black rounded-xl"
                            value={location}
                            onChange={handleLocationChange}
                        >
                            <option value="none">Select Your Location</option>
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
                    <div className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-lg p-5">
                        <div className="flex flex-row items-center justify-between border-b border-solid border-black pb-3">
                            <h2 className="text-xl font-bold">Let's Connect</h2>
                            <button
                                onClick={() => {
                                    setIsSidebarOpen(false);
                                    setLocation("none");
                                }}
                                className="bg-gray-500 p-2 rounded-full focus:outline-none hover:bg-gray-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Call to action buttons */}
                        <div className="flex flex-col mt-5 items-center space-y-3">
                            <div className="flex flex-row items-center justify-between">
                                <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 7h.01M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                                        />
                                    </svg>
                                    <span>Call Now</span>
                                </button>

                                <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 512 512"
                                        className="ml-3"
                                    >
                                        <path
                                            fill="white"
                                            d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
                                        />
                                    </svg>
                                    <span>Schedule a Call</span>
                                </button>
                            </div>

                            <button className="w-full bg-green-500 text-white py-3 rounded-full flex items-center justify-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                                    />
                                </svg>
                                <span>Connect on WhatsApp</span>
                            </button>
                        </div>

                        {/* Image */}
                        <div className="mt-5">
                            <img
                                src="https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxjYWxsJTIwdGF0dG9vfGVufDB8fDB8fHww"
                                alt="Support Person"
                                className="w-full h-[500px] rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};
