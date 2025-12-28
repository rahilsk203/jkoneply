import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import livingRoomIcon from '../assets/living_room.svg';
import livingRoomHover from '../assets/living_room_hover.svg';
import bedroomIcon from '../assets/bedroom_Inspiration.svg';
import bedroomHover from '../assets/bedroom_inspiration_hover.svg';
import diningIcon from '../assets/Dining_Area.svg';
import diningHover from '../assets/Dining_Area_hover.svg';
import commercialIcon from '../assets/Commercial_Spaces.svg';
import commercialHover from '../assets/Commercial_Spaces_hover.svg';
import minimalIcon from '../assets/Minimal_Interiors.svg';
import minimalHover from '../assets/Minimal_Interiors_hover.svg';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop',
        title: 'JKONEPLY Premium Plywood',
        subtitle: 'The ultimate choice for strength and durability. Engineered for excellence, crafted for your dream home.'
    },
    {
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
        title: 'Exquisite Designer Laminates',
        subtitle: 'Transform your interiors with our stunning range of textures and finishes. Style that speaks volumes.'
    },
    {
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop',
        title: 'Architectural Veneers',
        subtitle: 'Bring the natural beauty of wood to your spaces. Premium veneers for a sophisticated and timeless look.'
    }
];

const categories = [
    { name: 'LIVING ROOM', icon: livingRoomIcon, hover: livingRoomHover },
    { name: 'BEDROOM INSPIRATION', icon: bedroomIcon, hover: bedroomHover },
    { name: 'DINING AREA', icon: diningIcon, hover: diningHover },
    { name: 'COMMERCIAL SPACES', icon: commercialIcon, hover: commercialHover },
    { name: 'MINIMAL INTERIORS', icon: minimalIcon, hover: minimalHover }
];

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                        <div className="container">
                            <div className="hero-content">
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                                <button onClick={() => navigate('/products')} className="btn btn-white explore-btn">
                                    Shop Now <span className="arrow-icon"><i className="fas fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <button className="slider-arrow prev" onClick={prevSlide}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="slider-arrow next" onClick={nextSlide}>
                    <i className="fas fa-chevron-right"></i>
                </button>

                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>

            <div className="hero-category-bar">
                <div className="container">
                    <div className="category-list">
                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className="category-item"
                                onClick={() => navigate('/inspiration')}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="category-icon-wrapper">
                                    <img src={cat.icon} alt={cat.name} className="cat-icon default" />
                                    <img src={cat.hover} alt={cat.name} className="cat-icon hover" />
                                </div>
                                <span>{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
