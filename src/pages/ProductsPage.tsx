import React, { useState } from 'react';
import Products from '../components/Products';

const ProductsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');

    return (
        <div className="products-page-wrapper" style={{ paddingTop: '100px' }}>
            <div className="container">
                <div className="page-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '20px' }}>Our Premium Collection</h1>
                    <p style={{ fontSize: '18px', color: 'var(--light-text)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        Explore our curated range of high-performance building materials. Designed for elegance, engineered for durability.
                    </p>
                </div>

                {/* Products Component with Filtering */}
                <Products activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                <div className="products-features" style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>

                    <div className="feature-item" style={{ textAlign: 'center', padding: '40px 30px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <i className="fas fa-shield-alt" style={{ fontSize: '32px', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
                        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Quality Assurance</h3>
                        <p style={{ color: '#666' }}>Every product undergoes rigorous quality checks for durability.</p>
                    </div>
                    <div className="feature-item" style={{ textAlign: 'center', padding: '40px 30px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <i className="fas fa-headset" style={{ fontSize: '32px', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
                        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Expert Support</h3>
                        <p style={{ color: '#666' }}>Our experts are here to help you choose the right materials.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
