import React, { useRef } from "react";
import { Card } from "../components/Card";
import { CardSlider } from "../components/CardSlider";

export const Home = () => {

    const ShowcaseCardData = [
        {
            title: "Raclette Blueberry 1",
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            img: "https://media.istockphoto.com/id/1162623180/photo/process-of-creating-tattoo-in-form-of-black-flower.webp?a=1&b=1&s=612x612&w=0&k=20&c=EwP01t-hhoB5Ydnmm5J1qNWv_F840cAY1lUTPzbehZw=",
            link: "#",
        },
        {
            title: "Raclette Blueberry 2",
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            img: "https://images.unsplash.com/photo-1602103494381-5db708061ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRhdHRvc3xlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 3",
            img: "https://plus.unsplash.com/premium_photo-1707372367558-7421b2982ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRhdHRvc3xlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 4",
            img: "https://images.unsplash.com/photo-1618232193840-3a4658a0b7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhdHRvc3xlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 5",
            img: "https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbHRpcGxlJTIwdGF0dG9vfGVufDB8fDB8fHww",
            link: "#",
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 6",
            img: "https://media.istockphoto.com/id/917893110/photo/laser-tattoo-removal-on-womans-shoulder.jpg?s=612x612&w=0&k=20&c=DGObpscsVGmrgPlk-SFkGyCCpD2FsDWaO-CjNYR6t3A=",
            link: "#",
        },
        {
            style: "relative min-w-[250px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg",
            title: "Raclette Blueberry 7",
            img: "https://media.istockphoto.com/id/492258714/photo/expert-tattooing-female-customers-lap.jpg?s=612x612&w=0&k=20&c=QRsMP2kkfa9y673NXjh6aM5bZRYSjz0z8ZbhbB_Yab0=",
            link: "#",
        }
    ];

    const storyStyle = "relative min-w-[300px] h-[300px] flex flex-col items-center justify-center shadow-lg"
    const StoryCardData = [
        {
            title: "Raclette Blueberry 1",
            style: storyStyle,
            img: "https://media.istockphoto.com/id/1162623180/photo/process-of-creating-tattoo-in-form-of-black-flower.webp?a=1&b=1&s=612x612&w=0&k=20&c=EwP01t-hhoB5Ydnmm5J1qNWv_F840cAY1lUTPzbehZw=",
            link: "#",
        },
        {
            title: "Raclette Blueberry 2",
            style: storyStyle,
            img: "https://plus.unsplash.com/premium_photo-1664536582165-ef68f40e6e9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF0dG9zfGVufDB8fDB8fHww",
            link: "#",
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 3",
            img: "https://plus.unsplash.com/premium_photo-1707372368598-09f08a780794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGF0dG9zfGVufDB8fDB8fHww",
            link: "#",
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 4",
            img: "https://images.unsplash.com/photo-1618232193840-3a4658a0b7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhdHRvc3xlbnwwfHwwfHx8MA%3D%3D",
            link: "#",
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 5",
            img: "https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbHRpcGxlJTIwdGF0dG9vfGVufDB8fDB8fHww",
            link: "#",
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 6",
            img: "https://media.istockphoto.com/id/917893110/photo/laser-tattoo-removal-on-womans-shoulder.jpg?s=612x612&w=0&k=20&c=DGObpscsVGmrgPlk-SFkGyCCpD2FsDWaO-CjNYR6t3A=",
            link: "#",
        },
        {
            style: storyStyle,
            title: "Raclette Blueberry 7",
            img: "https://media.istockphoto.com/id/492258714/photo/expert-tattooing-female-customers-lap.jpg?s=612x612&w=0&k=20&c=QRsMP2kkfa9y673NXjh6aM5bZRYSjz0z8ZbhbB_Yab0=",
            link: "#",
        }
    ];

    const serviceStyle = "relative mt-1 min-w-[400px] h-[300px] flex flex-col items-center justify-center rounded-sm shadow-lg"
    const ServiceCardData = [
        {
            style: serviceStyle,
            content: "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "#"
            },
            title: "Raclette Blueberry 1",
            img: "https://media.istockphoto.com/id/1162623180/photo/process-of-creating-tattoo-in-form-of-black-flower.webp?a=1&b=1&s=612x612&w=0&k=20&c=EwP01t-hhoB5Ydnmm5J1qNWv_F840cAY1lUTPzbehZw=",
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 2",
            img: "https://plus.unsplash.com/premium_photo-1664536582165-ef68f40e6e9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF0dG9zfGVufDB8fDB8fHww",
            content: "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action"
            },
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 3",
            img: "https://plus.unsplash.com/premium_photo-1707372368598-09f08a780794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGF0dG9zfGVufDB8fDB8fHww",
            content: "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action"
            },
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 4",
            img: "https://images.unsplash.com/photo-1618232193840-3a4658a0b7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhdHRvc3xlbnwwfHwwfHx8MA%3D%3D",
            content: "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action"
            },
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 5",
            img: "https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbHRpcGxlJTIwdGF0dG9vfGVufDB8fDB8fHww",
            content: "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action"
            },
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 6",
            img: "https://media.istockphoto.com/id/917893110/photo/laser-tattoo-removal-on-womans-shoulder.jpg?s=612x612&w=0&k=20&c=DGObpscsVGmrgPlk-SFkGyCCpD2FsDWaO-CjNYR6t3A=",
            content: "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action"
            },
        },
        {
            style: serviceStyle,
            title: "Raclette Blueberry 7",
            img: "https://media.istockphoto.com/id/492258714/photo/expert-tattooing-female-customers-lap.jpg?s=612x612&w=0&k=20&c=QRsMP2kkfa9y673NXjh6aM5bZRYSjz0z8ZbhbB_Yab0=",
            content: "A team of award-winning artists recognized worldwide stand ready to transform your vision into a masterpiece.",
            button: {
                text: "Click Me",
                link: "/link-to-action"
            },
        }
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
                            'url("https://media.istockphoto.com/id/1427972055/photo/woman-applying-cream-onto-tattoo-on-her-skin-against-light-background-closeup.jpg?s=612x612&w=0&k=20&c=ZxMcgY9ZgpEVm3DCc6Ddm9s9c0fKyN3024gk_PKztn0=")',
                    }}
                >
                    <div className="bg-black bg-opacity-50 h-full flex items-center">
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
                    <h1 className="text-center font-bold text-3xl">Stories of Tattoos</h1>
                    <p className="text-center px-80">We spotlight the top five stories that highlight our latest artistic achievements, community engagements, and groundbreaking collaborations. Stay connected, stay inspired, and discover the fresh stories that keeps Aliens Tattoo at the forefront of artistic exploration.</p>
                </div>
                <div className="mt-10">
                    <CardSlider cardData={StoryCardData} />
                </div>
            </section>

            <section className="relative px-14 mt-14">
                <div className="flex flex-col md:flex-row items-stretch justify-between">
                    <div className="w-full md:w-1/2 h-[800px] relative flex items-center justify-center">
                        <img
                            className="w-full h-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1707327144389-e7151b0dd08c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFydCUyMHRhdHRvbyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                            alt="Raclette Blueberry"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-50" /> {/* Dim black overlay */}
                            <div className="relative z-10 text-center text-white p-5">
                                <h1 className="text-4xl font-bold mb-4">Let’s bring <span className="text-black">your</span> vision to life</h1>
                                <h2 className="text-2xl mb-4">Tattoo Design Service by Aliens</h2>
                                <p className="mb-6">Aliens Tattoo crafts your personalized design, setting no limits on where you bring it to life. Receive a bespoke masterpiece from us, ready for inking by any artist, anywhere in the world.</p>
                                <button className="bg-black text-white px-6 py-2 rounded">Book an Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[800px] relative">
                        <img
                            className="w-full h-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1707057704991-1f0cec6e9a3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwdGF0dG9vJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Artistic Tattoo"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gray-500 opacity-10" /> {/* Dim black overlay for second image */}
                            {/* You can add additional content for the second image here if needed */}
                        </div>
                    </div>
                </div>
                <CardSlider cardData={ServiceCardData} />
            </section>

            <section className="relative px-14 mt-14">
                <div className="flex flex-col md:flex-row items-stretch justify-between">
                    <div className="w-full md:w-1/2 h-[700px] relative flex items-center justify-center">
                        <img
                            className="w-full h-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1708126176305-b8edcffd0525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGFydCUyMHRhdHRvbyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                            alt="Raclette Blueberry"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-50" /> {/* Dim black overlay */}
                            <div className="relative z-10 text-center text-white p-5">
                                <h1 className="text-4xl font-bold mb-2">Express
                                    Yourself</h1>
                                <h2 className="text-xl mb-5">Piercings by Client</h2>
                                <p className="mb-6 px-10">Aliens offers expert piercing services that blend safety with style, ensuring each piece not only enhances your look but also expresses your unique identity.</p>
                                <button className="bg-black text-white px-6 py-2 rounded">Book an Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-fixed bg-cover bg-center w-full md:w-1/2 h-[700px] relative"
                        style={{
                            backgroundImage:
                                'url("https://plus.unsplash.com/premium_photo-1698046366833-6591925f51ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHxhcnQlMjB0YXR0b28lMjBnaXJsfGVufDB8fDB8fHww")',
                        }}
                    >
                    </div>
                </div>
            </section >

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

            <section className="relative mt-10">
                <img
                    className="w-full h-[700px] px-14 object-cover bg-fixed z-0"
                    src="https://media.istockphoto.com/id/1269503007/photo/the-new-normal-after-covid-19-pandemic.jpg?s=612x612&w=0&k=20&c=IcONPYUJZ7UoOgIBz6rZOQ099-PwEAtg0MGKYyvFVNg="
                    alt="image"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50" /> {/* Dim black overlay */}
                    <div className="relative z-10 text-center text-white p-5">
                        <h1 className="text-4xl font-bold mb-2">Your art is secured for life, thats our promise!</h1>
                        <h2 className="text-xl mb-5">Life time tattoo protection.</h2>
                        <p className="mb-6 px-10">Aliens offers expert piercing services that blend safety with style, ensuring each piece not only enhances your look but also expresses your unique identity.</p>
                        <button className="bg-black text-white px-6 py-2 rounded">Book an Appointment</button>
                    </div>
                </div>
            </section>
        </>
    );
};
