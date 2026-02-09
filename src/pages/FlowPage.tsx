import React from 'react';
import './FlowPage.css';
import logo from '../assets/logo.svg';

const FlowPage: React.FC = () => {
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

    return (
        <div className="flow-page">
            <div className="flow-container">
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
                    <button className="flow-action-btn contact-btn">
                        <i className="fas fa-download"></i> Add to Contacts
                    </button>
                    <button className="flow-action-btn share-btn">
                        <i className="fas fa-share"></i> Share
                    </button>
                </div>

                <div className="flow-links">
                    {socialLinks.map((link, index) => (
                        <a key={index} href="#" className="flow-link-card">
                            <div className="link-icon-wrapper" style={{ color: link.color }}>
                                <i className={link.icon}></i>
                            </div>
                            <div className="link-text">
                                <span className="link-name">{link.name}</span>
                                <span className="link-label">{link.label}</span>
                            </div>
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
