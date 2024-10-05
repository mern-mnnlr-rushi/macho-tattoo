import React from "react";
import { Card } from "./Card";
import { CardSlider } from "./CardSlider";

export const ImgAndCard_CardSlider = ({
    img,
    cardStyle,
    titleText,
    boldText,
    subText,
    bodyText,
    btnLink,
    wantsappLink,
    callLink,
    cardSliderData,
}) => {
    return (
        <div>
            <div className="w-full md:w-full h-[700px] relative flex items-center justify-center">
                <img className="w-full h-full object-cover" src={img} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Card
                        style={cardStyle}
                        title={titleText}
                        titleBold={boldText}
                        subText={subText}
                        body={bodyText}
                        btnLink={btnLink}
                        whatsappLink={wantsappLink}
                        callLink={callLink}
                    />
                </div>
            </div>
            <div className="mx-auto py-1">
                <CardSlider cardData={cardSliderData} />
            </div>
        </div>
    );
};
