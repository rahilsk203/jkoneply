import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page-wrapper" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
            <div className="container">
                <div className="page-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '20px' }}>Get in Touch</h1>
                    <p style={{ fontSize: '18px', color: 'var(--light-text)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        Have a question or need assistance? We're here to help you build your dream space. Reach out to us today.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info Card */}
                    <div className="contact-card info-card">
                        <h2>Contact Information</h2>
                        <p className="info-desc">Fill up the form and our Team will get back to you within 24 hours.</p>

                        <div className="info-item">
                            <div className="icon-box">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="info-text">
                                <h3>Phone</h3>
                                <p>+91 94747 07527</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p>Jkoneply@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="info-text">
                                <h3>Address</h3>
                                <p>123, Industrial Area, Phase 1,<br />New Delhi, India - 110020</p>
                            </div>
                        </div>

                        <div className="social-links-contact">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="contact-card form-card">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Product Inquiry" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="How can we help you?" rows={5}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary send-btn">
                                Send Message <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
