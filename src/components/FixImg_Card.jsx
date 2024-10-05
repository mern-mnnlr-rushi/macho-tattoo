import React from "react";
import { Card } from "./Card";

export const FixImg_Card = ({
    img,
    cardStyle,
    titleTextBold,
    subText,
    bodyText,
    btnLink,
    whatsappLink,
    callLink,
}) => {
    return (
        <div>
            <div
                className="bg-fixed bg-cover bg-center h-[900px]"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className="bg-black bg-opacity-10 h-full flex items-center">
                    <Card
                        style={cardStyle}
                        titleBold={titleTextBold}
                        subText={subText}
                        body={bodyText}
                        btnLink={btnLink}
                        whatsappLink={whatsappLink}
                        callLink={callLink}
                    />
                </div>
            </div>
        </div>
    );
};
