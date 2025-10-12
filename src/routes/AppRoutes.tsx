import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'))
const Products = lazy(() => import('../pages/Products'))
const Gallery = lazy(() => import('../pages/Gallery'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Quote = lazy(() => import('../pages/Quote'))

// Loading component for lazy-loaded pages
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
)

const AppRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default AppRoutes