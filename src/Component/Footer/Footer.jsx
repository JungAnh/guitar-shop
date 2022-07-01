import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-description">
                <p>This is a project site for my intern project only. The pictures are the property of Muziker.hu</p>
                <h3>Subscribe to our newsletter for the best deals possible</h3>
                <form action="">
                    <input className='subcribe-input' type="email" placeholder='Your Email' />
                    <button>Subcribe</button>
                </form>
            </div>
            <div className="footer-social">
                <Link to="" className="footer-social-icon">
                    <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="" className="footer-social-icon">
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="" className="footer-social-icon">
                    <i className="fa-brands fa-youtube"></i>
                </Link>
            </div>
            <div className="footer-links">
                <div className="footer-links-item">
                    <h2>SHOPPING</h2>
                    <Link to="">How to buy</Link>
                    <Link to="">Payment Terms</Link>
                    <Link to="">Shopping cost</Link>
                    <Link to="">Parcel Tracking</Link>
                    <Link to="">Warranty</Link>
                </div>
                <div className="footer-links-item">
                    <h2>CONTACT US</h2>
                    <Link to="">Contact</Link>
                    <Link to="">Support</Link>
                    <p>Phone: 0382433141</p>
                    <p>
                        Email: <Link to="">phananh26082001@gmail.com</Link>
                    </p>
                </div>
                <div className="footer-links-item">
                    <h2>ABOUT ME</h2>
                    <Link to="">Dep trai</Link>
                    <Link to="">Tai gioi</Link>
                    <Link to="">Co xe rieng</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer