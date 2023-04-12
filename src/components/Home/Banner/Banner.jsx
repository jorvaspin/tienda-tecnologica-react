import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>VENTA</h1>
                    <p>
                    Descubre la mejor tecnología de audio. Modelos exclusivos y de alta calidad para disfrutar de tu música como nunca. En nuestra tienda, apasionados por la innovación.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta"> <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> Sabes más </a></div>
                        <div className="banner-cta v2">Compra Ahora</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
