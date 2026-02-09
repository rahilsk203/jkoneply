import React, { useState } from 'react';

const categories = [
    { id: 'living', name: 'LIVING ROOM' },
    { id: 'bedroom', name: 'BEDROOM INSPIRATION' },
    { id: 'dining', name: 'DINING AREA' },
    { id: 'commercial', name: 'COMMERCIAL SPACES' },
    { id: 'minimal', name: 'MINIMAL INTERIORS' }
];

const inspirationData = {
    bedroom: {
        title: 'Ideas to match your Bedroom interior style',
        subtitle: 'Create a cozy and stylish retreat by matching your bedroom interior with soothing colors, elegant furniture, and personalized decor.',
        grid: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1616594197247-b6956629919c?q=80&w=1000&auto=format&fit=crop', span: 'large-v' },
            { type: 'text', title: 'Built to Last', description: 'Our products resist moisture, termites, and wear, ensuring long-term durability', color: '#5D735D' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop', span: 'small' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop', span: 'large-v' }
        ]
    },
    living: {
        title: 'Ideas to match your Living Room style',
        subtitle: 'Elevate your living space with modern designs and premium materials that reflect your personality.',
        grid: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop', span: 'large-v' },
            { type: 'text', title: 'Elegant Design', description: 'Crafted with precision to bring sophistication to your home.', color: '#7D5D5D' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop', span: 'small' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000&auto=format&fit=crop', span: 'large-v' }
        ]
    },
    // Adding placeholders for other categories
    dining: {
        title: 'Ideas to match your Dining Area style',
        subtitle: 'Create memorable dining experiences with our exquisite range of furniture and decor.',
        grid: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1617806118233-18e16747d52c?q=80&w=1000&auto=format&fit=crop', span: 'large-v' },
            { type: 'text', title: 'Premium Finish', description: 'High-quality materials that ensure a luxurious dining atmosphere.', color: '#5D5D7D' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1000&auto=format&fit=crop', span: 'small' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1615064646657-3508b9f62ff3?q=80&w=1000&auto=format&fit=crop', span: 'large-v' }
        ]
    },
    commercial: {
        title: 'Ideas to match your Commercial Space style',
        subtitle: 'Professional and inspiring interiors designed for productivity and brand identity.',
        grid: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop', span: 'large-v' },
            { type: 'text', title: 'Workplace Innovation', description: 'Durable and stylish solutions for modern office environments.', color: '#333333' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop', span: 'small' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop', span: 'large-v' }
        ]
    },
    minimal: {
        title: 'Ideas to match your Minimal Interior style',
        subtitle: 'Beauty in simplicity. Clean lines and functional designs for a peaceful living environment.',
        grid: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1615876234586-d6113f91834e?q=80&w=1000&auto=format&fit=crop', span: 'large-v' },
            { type: 'text', title: 'Pure Simplicity', description: 'Minimalist approach with maximum impact on your lifestyle.', color: '#999999' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1000&auto=format&fit=crop', span: 'small' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1615876234586-d6113f91834e?q=80&w=1000&auto=format&fit=crop', span: 'large-v' }
        ]
    }
};

const InspirationPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('bedroom');
    const currentData = inspirationData[activeTab as keyof typeof inspirationData];

    return (
        <div className="inspiration-page">
            <div className="container">
                <div className="inspiration-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            {cat.name}
                            {activeTab === cat.id && <span className="tab-indicator"></span>}
                        </button>
                    ))}
                </div>

                <div className="inspiration-content reveal active">
                    <div className="inspiration-header">
                        <h1>{currentData.title}</h1>
                        <p>{currentData.subtitle}</p>
                    </div>

                    <div className="inspiration-grid">
                        {currentData.grid.map((item, index) => {
                            if (item.type === 'image') {
                                return (
                                    <div
                                        key={index}
                                        className={`grid-item image-item ${item.span}`}
                                        style={{ backgroundImage: `url(${item.url})` }}
                                    ></div>
                                );
                            } else {
                                return (
                                    <div
                                        key={index}
                                        className="grid-item text-item"
                                        style={{ background: item.color }}
                                    >
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InspirationPage;
