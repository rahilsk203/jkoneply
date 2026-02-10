import React, { useState, useEffect, useRef } from 'react';
import './FlowPage.css';
import logo from '../assets/logo.svg';

const FlowPage: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const socialLinks = [
        { name: 'JK Plywood | Whatsapp', label: 'Chat Now', icon: 'fab fa-whatsapp', color: '#25D366' },
        { name: 'JK Plywood | Instagram', label: 'Follow Now', icon: 'fab fa-instagram', color: '#E1306C' },
        { name: 'JK Plywood | Facebook', label: 'Like Our Page', icon: 'fab fa-facebook-f', color: '#1877F2' },
        { name: 'JK Plywood | Pinterest', label: 'Share with all', icon: 'fab fa-pinterest-p', color: '#BD081C' },
        { name: 'JK Plywood | Corporate Office', label: 'Locate us', icon: 'fas fa-map-marker-alt', color: '#EA4335' },
        { name: 'JK Plywood | Product Brochure', label: 'Download Brochure', icon: 'fas fa-download', color: '#333' },
        { name: 'JK Plywood | Door Brochure', label: 'Download Brochure', icon: 'fas fa-download', color: '#333' },
        { name: 'JK Plywood | Door Designs', label: 'View Designs', icon: 'fas fa-download', color: '#333' },
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple-effect');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    const handleCardMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(10px) scale(1.02)`;
    };

    const handleCardMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const card = e.currentTarget;
        card.style.transform = '';
    };

    return (
        <div className="flow-page">
            <div
                className="flow-container"
                ref={containerRef}
                style={{
                    '--mouse-x': `${mousePosition.x}px`,
                    '--mouse-y': `${mousePosition.y}px`
                } as React.CSSProperties}
            >
                <div className="flow-header">
                    <div className="flow-logo-wrapper">
                        <img src={logo} alt="JKONEPLY Logo" className="flow-logo" />
                    </div>
                    <h1>JK Plywood</h1>
                    <p className="flow-description">
                        JK Plywood specializes in creating high-quality, long-lasting
                        plywood products that are both stylish and environmentally
                        responsible. Our range includes plywood, block boards, and
                        laminated doors, all designed to provide exceptional strength
                        and durability for various furnishing and interior needs.
                    </p>
                </div>

                <div className="flow-quick-contact">
                    <a href="#" className="contact-icon"><i className="fas fa-globe"></i></a>
                    <a href="#" className="contact-icon"><i className="fas fa-phone-alt"></i></a>
                    <a href="#" className="contact-icon"><i className="fas fa-map-marker-alt"></i></a>
                    <a href="#" className="contact-icon"><i className="fas fa-envelope"></i></a>
                    <a href="#" className="contact-icon"><i className="fas fa-comment-alt"></i></a>
                </div>

                <div className="flow-actions">
                    <button className="flow-action-btn contact-btn" onClick={createRipple}>
                        <i className="fas fa-download"></i> Add to Contacts
                    </button>
                    <button className="flow-action-btn share-btn" onClick={createRipple}>
                        <i className="fas fa-share"></i> Share
                    </button>
                </div>

                <div className="flow-links">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href="#"
                            className="flow-link-card"
                            onMouseMove={handleCardMouseMove}
                            onMouseLeave={handleCardMouseLeave}
                        >
                            <div className="link-icon-wrapper" style={{ color: link.color }}>
                                <i className={link.icon}></i>
                            </div>
                            <div className="link-text">
                                <span className="link-name">{link.name}</span>
                                <span className="link-label">{link.label}</span>
                            </div>
                            <i className="fas fa-arrow-right link-arrow"></i>
                        </a>
                    ))}
                </div>

                <div className="flow-footer-text">
                    A PRODUCT OF JKONEPLY PVT. LTD.
                </div>
            </div>

            <footer className="flow-legal">
                <div className="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
                <div className="copyright">
                    © 2026 the dtx company
                </div>
            </footer>
        </div>
    );
};

export default FlowPage;
