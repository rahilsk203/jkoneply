import React from 'react';

const products = [
    {
        id: 1,
        name: 'Premium Teak Plywood',
        category: 'PLYWOOD',
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop',
        price: 'Starting from ₹2,499',
        badge: 'BESTSELLER'
    },
    {
        id: 2,
        name: 'Designer Laminates',
        category: 'LAMINATES',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
        price: 'Starting from ₹1,899',
        badge: 'NEW'
    },
    {
        id: 5,
        name: 'Birch Plywood',
        category: 'PLYWOOD',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
        price: 'Starting from ₹3,499'
    },
    {
        id: 6,
        name: 'Textured Laminates',
        category: 'LAMINATES',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop',
        price: 'Starting from ₹2,199',
        badge: 'TRENDING'
    }
];

const categories = ['ALL', 'PLYWOOD', 'LAMINATES'];

interface ProductsProps {
    activeCategory?: string;
    setActiveCategory?: (category: string) => void;
}

const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => {
    const [thickness, setThickness] = React.useState('18 mm');
    const [quantity, setQuantity] = React.useState(1);

    const thicknessOptions = ['4 mm', '6 mm', '8 mm', '12 mm', '15 mm', '16 mm', '18 mm'];

    const getWhatsAppLink = () => {
        let message = `I'm interested in ${product.name}`;
        if (product.category === 'PLYWOOD') {
            message += `\nThickness: ${thickness}\nQuantity: ${quantity}`;
        }
        return `https://wa.me/919474707527?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="product-card reveal">
            <div className="product-image" style={{ backgroundImage: `url('${product.image}')` }}>
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <div className="product-overlay">
                    <button className="btn btn-white shop-btn">Quick View</button>
                </div>
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>

                {product.category === 'PLYWOOD' && (
                    <div className="product-options-container">
                        <div className="product-option-group">
                            <label className="product-option-label">Select Thickness</label>
                            <div className="product-option-wrapper">
                                <select
                                    value={thickness}
                                    onChange={(e) => setThickness(e.target.value)}
                                    className="product-option-select"
                                >
                                    {thicknessOptions.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="product-option-group">
                            <label className="product-option-label">Quantity (Sheets)</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                className="product-option-input"
                            />
                        </div>
                    </div>
                )}

                <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="add-to-cart"
                    style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}
                >
                    <i className="fab fa-whatsapp"></i> Buy on WhatsApp
                </a>
            </div>
        </div>
    );
};

const Products: React.FC<ProductsProps> = ({ activeCategory = 'ALL', setActiveCategory }) => {
    const filteredProducts = activeCategory === 'ALL'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="products" className="section products-section">
            <div className="container">
                {/* Only show title if not passed props (meaning it's on home page) */}
                {!setActiveCategory && <h2 className="section-title reveal">Our Premium Products</h2>}

                {/* Category Filter */}
                {setActiveCategory && (
                    <div className="category-filter">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {setActiveCategory && (
                    <div className="load-more-container">
                        <button className="btn btn-outline">Load More Products</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;
