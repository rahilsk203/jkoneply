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
                            <a href="https://www.facebook.com/share/1EDxRDqe9P/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@jkoneply" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 JKONEPLY Building Materials. All rights reserved.</p>
                    <div className="footer-links">
                        <Link to="/contact">Contact Us</Link>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
