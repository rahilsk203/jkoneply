import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import InspirationPage from './pages/InspirationPage'
import ContactPage from './pages/ContactPage'
import FlowPage from './pages/FlowPage'
import './App.css'

function AppContent() {
  const location = useLocation();
  const isFlowPage = location.pathname === '/flow';

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Reveal animations
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {!isFlowPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/flow" element={<FlowPage />} />
        </Routes>
      </main>
      {!isFlowPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
