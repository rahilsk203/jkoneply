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
        id: 3,
        name: 'Architectural Veneers',
        category: 'VENEERS',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
        price: 'Starting from ₹4,299',
        badge: 'PREMIUM'
    },
    {
        id: 4,
        name: 'Modern Door Skins',
        category: 'DOORS',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7ef?q=80&w=1000&auto=format&fit=crop',
        price: 'Starting from ₹3,199'
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

const categories = ['ALL', 'PLYWOOD', 'LAMINATES', 'VENEERS', 'DOORS'];

interface ProductsProps {
    activeCategory?: string;
    setActiveCategory?: (category: string) => void;
}

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
                        <div key={product.id} className="product-card reveal">
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
                                <button className="add-to-cart">
                                    <i className="fas fa-shopping-cart"></i> Add to Cart
                                </button>
                            </div>
                        </div>
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
