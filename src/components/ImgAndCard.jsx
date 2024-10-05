import React from "react";
import { Card } from "./Card";

export const ImgAndCard = ({
    img,
    cardStyle,
    cardTitle,
    cardTitleBold,
    cardBody,
    cardBtnLink,
    cardWhatsappLink,
    cardCallLink,
}) => {
    return (
        <div>
            <img
                className="w-full h-[700px] px-14 object-cover bg-fixed z-0"
                src={img}
                alt="image"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
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
    );
};
