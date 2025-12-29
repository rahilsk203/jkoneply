import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="top-bar">
                <div className="container">
                    <div className="contact-info">
                        <i className="fab fa-whatsapp"></i>
                        <span>Customer Care: <strong>+91 94747 07527</strong></span>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">
                        <img src={logo} alt="jkoneply logo" className="brand-logo" />

                    </Link>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/inspiration" onClick={() => setIsMenuOpen(false)}>Inspiration</Link></li>
                        <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                    <div className="nav-actions">
                        <div className="mobile-menu-btn" onClick={toggleMenu}>
                            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <div className="search-bar">
                            <input type="text" placeholder="Search..." />
                            <i className="fas fa-microphone"></i>
                        </div>
                        <div className="icons">
                            <Link to="/login" aria-label="Login">
                                <i className="far fa-user"></i>
                            </Link>
                            <i className="far fa-heart"></i>
                            <div className="cart-icon">
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                        </div>
                        <Link to="/products" className="btn btn-primary shop-now">
                            Shop Now <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
