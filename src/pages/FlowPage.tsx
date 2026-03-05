import React, { useState, useEffect, useRef } from 'react';
import './FlowPage.css';
import logo from '../assets/logo.svg';
import plyHover from '../assets/ply-hover.png';

const FlowPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const socialLinks = [
        { name: 'JK ONE PLY | Whatsapp', label: 'Chat Now', icon: 'fab fa-whatsapp', color: '#25D366', url: 'https://wa.me/919474707527' },
        { name: 'JK ONE PLY | Instagram', label: 'Follow Now', icon: 'fab fa-instagram', color: '#E1306C', url: 'https://www.instagram.com/jk_one_ply' },
        { name: 'JK ONE PLY | Facebook', label: 'Like Our Page', icon: 'fab fa-facebook-f', color: '#1877F2', url: 'https://www.facebook.com/share/1EDxRDqe9P/' },
        { name: 'JK ONE PLY | Pinterest', label: 'Share with all', icon: 'fab fa-pinterest-p', color: '#BD081C', url: 'https://pin.it/NKLZUXDWx' },
        { name: 'JK ONE PLY | MR - PRO', label: 'Download Brochure', icon: 'fas fa-download', color: '#333' },
        { name: 'JK ONE PLY | GOLD - PRIME', label: 'Download Brochure', icon: 'fas fa-download', color: '#333' },
        { name: 'JK ONE PLY | CLUB - PLUS', label: 'View Designs', icon: 'fas fa-download', color: '#333' },
        { name: 'JK ONE PLY | Door', label: 'Download Brochure', icon: 'fas fa-download', color: '#333' },
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                containerRef.current.style.setProperty('--mouse-x', `${x}px`);
                containerRef.current.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
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

    const downloadVCard = (e: React.MouseEvent<HTMLButtonElement>) => {
        createRipple(e);
        const vcard = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            'FN:JK ONE PLY',
            'ORG:JK ONE PLY PVT. LTD.',
            'TEL;TYPE=CELL:+919474707527',
            'EMAIL:jkoneply@gmail.com',
            'ADR;TYPE=WORK:;;West Bengal;India',
            'URL:https://www.facebook.com/share/1EDxRDqe9P/',
            'END:VCARD'
        ].join('\n');

        const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'JK_ONE_PLY.vcf';
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleShare = async (e: React.MouseEvent<HTMLButtonElement>) => {
        createRipple(e);
        const shareData = {
            title: 'JK ONE PLY',
            text: 'Check out JK ONE PLY - High-quality plywood products.',
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    const handleCardMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        requestAnimationFrame(() => {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
            card.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.3)`;
        });
    };

    const handleCardMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const card = e.currentTarget;
        requestAnimationFrame(() => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    };

    return (
        <div className="flow-page">
            <div
                className="flow-container"
                ref={containerRef}
            >
                <div className="flow-header">
                    <div className="flow-logo-wrapper">
                        <img src={logo} alt="JK ONE PLY Logo" className="flow-logo" />
                        <img src={plyHover} alt="JK ONE PLY Plywood" className="flow-logo hover-img" />
                    </div>
                    <h1>JK ONE PLY</h1>
                    <p className="flow-description">
                        JK ONE PLY specializes in creating high-quality, long-lasting
                        plywood products that are both stylish and environmentally
                        responsible. Our range includes plywood, block boards, and
                        laminated doors, all designed to provide exceptional strength
                        and durability for various furnishing and interior needs.
                    </p>
                </div>

                <div className="flow-quick-contact">
                    <a href="#" className="contact-icon"><i className="fas fa-globe"></i></a>
                    <a href="tel:+919474707527" className="contact-icon"><i className="fas fa-phone-alt"></i></a>
                    <a href="https://maps.google.com/?q=West+Bengal,India" target="_blank" rel="noopener noreferrer" className="contact-icon"><i className="fas fa-map-marker-alt"></i></a>
                    <a href="mailto:jkoneply@gmail.com" className="contact-icon"><i className="fas fa-envelope"></i></a>
                    <a href="https://wa.me/919474707527" target="_blank" rel="noopener noreferrer" className="contact-icon"><i className="fas fa-comment-alt"></i></a>
                </div>

                <div className="flow-actions">
                    <button className="flow-action-btn contact-btn" onClick={downloadVCard}>
                        <i className="fas fa-user-plus"></i> Add to Contacts
                    </button>
                    <button className="flow-action-btn share-btn" onClick={handleShare}>
                        <i className="fas fa-share"></i> Share
                    </button>
                </div>

                <div className="flow-links">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={(link as any).url || '#'}
                            target={(link as any).url ? '_blank' : '_self'}
                            rel="noopener noreferrer"
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
                    A PRODUCT OF JK ONE PLY PVT. LTD.
                </div>
            </div>

            <footer className="flow-legal">
                <div className="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
                <div className="copyright">
                    © 2026 JK ONE PLY
                </div>
            </footer>
        </div>
    );
};

export default FlowPage;
