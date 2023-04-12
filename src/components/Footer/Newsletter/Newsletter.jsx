import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Novedades</span>
                <span className="big-text">
                     Suscribete para ofertas y novedades en Audio y tecnología.
                </span>
                <div className="form">
                    <input type="text" placeholder="Email" />
                    <button>Suscribirse</button>
                </div>
                <span className="text">
                    Será utilizado de acuerdo con nuestra Política de privacidad.
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
