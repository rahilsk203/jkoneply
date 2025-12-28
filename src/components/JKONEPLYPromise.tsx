import React from 'react';

const promises = [
    {
        icon: 'fas fa-qrcode',
        title: 'Authenticity',
        description: '100% Genuine Plywood with instant QR verification on every sheet.'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Durability',
        description: 'Engineered for long-lasting strength, stability, and resistance to elements.'
    },
    {
        icon: 'fas fa-microchip',
        title: 'Innovation',
        description: 'Cutting-edge technology and superior craftsmanship in every layer.'
    },
    {
        icon: 'fas fa-leaf',
        title: 'Sustainability',
        description: 'Responsibly sourced materials for a greener and more sustainable future.'
    }
];

const JKONEPLYPromise: React.FC = () => {
    return (
        <section className="section promise-section">
            <div className="container">
                <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title" style={{ color: 'var(--white)' }}>The JKONEPLY Promise</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto' }}>
                        Our commitment to excellence goes beyond just products. We promise quality, trust, and innovation in every piece of wood we craft.
                    </p>
                </div>

                <div className="promise-grid">
                    {promises.map((item, index) => (
                        <div key={index} className="promise-pillar reveal">
                            <div className="pillar-icon">
                                <i className={item.icon}></i>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="promise-cta reveal" style={{ textAlign: 'center', marginTop: '60px' }}>
                    <a href="#" className="btn btn-primary">Verify Your Product <i className="fas fa-external-link-alt" style={{ marginLeft: '10px', fontSize: '14px' }}></i></a>
                </div>
            </div>
        </section>
    );
};

export default JKONEPLYPromise;
