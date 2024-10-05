import React from "react";
import { Card } from "./Card";
import { CardSlider } from "./CardSlider";

export const FixImg_Card_CardSlider = ({
    fixImg,
    cardStyle,
    cardTitle,
    cardTitleBold,
    cardBody,
    cardBtnLink,
    cardWhatsappLink,
    cardCallLink,
    cardSliderData,
}) => {
    return (
        <div>
            <div
                className="bg-fixed bg-cover bg-center h-[900px]"
                style={{
                    backgroundImage: `url(${fixImg})`,
                }}
            >
                <div className="bg-black bg-opacity-10 h-full flex items-center">
                    <Card
                        style={cardStyle}
                        title={cardTitle}
                        titleBold={cardTitleBold}
                        body={cardBody}
                        btnLink={cardBtnLink}
                        whatsappLink={cardWhatsappLink}
                        callLink={cardCallLink}
                    />
                </div>
            </div>
            <div className="mx-auto py-1">
                <CardSlider cardData={cardSliderData} />
            </div>
        </div>
    );
};
