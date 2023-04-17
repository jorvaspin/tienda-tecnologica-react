import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">Sobre nosotros</div>
                    <div className="text">
                    En nuestra tienda de tecnología, somos apasionados por la innovación y la calidad. Ofrecemos una amplia selección de productos electrónicos 
                    de última generación, desde smartphones hasta laptops y dispositivos de realidad virtual. Nos comprometemos a brindar 
                    la mejor experiencia de compra a nuestros clientes, con atención personalizada y asesoramiento experto. Nuestro objetivo es que nuestros
                    clientes siempre se sientan satisfechos y encuentren los productos tecnológicos que necesitan para mejorar su vida. ¡Bienvenidos a nuestra tienda de tecnología!
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contacto</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Providencia
                            concepción, 344
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Teléfono: +569 133</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: contacto@jvpinto.com</div>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Tienda 2023 Creado por Jorge Vásquez.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
