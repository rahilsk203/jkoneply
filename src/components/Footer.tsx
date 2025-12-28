import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column brand-column">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="JKONEPLY" />
                        </Link>
                        <p className="footer-desc">
                            Premium quality plywood, laminates, and veneers for your dream spaces. Engineered for durability, crafted for elegance.
                        </p>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 JKONEPLY Building Materials. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
