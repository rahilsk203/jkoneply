import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { fadeIn, staggerContainer } from '../Animations'
import gallery1 from '../assets/galleryImage/gallery1.jpg'
import gallery2 from '../assets/galleryImage/gallery2.jpg'
import gallery3 from '../assets/galleryImage/gallery3.jpg'
import gallery4 from '../assets/galleryImage/gallery4.jpg'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const images = [gallery1, gallery2, gallery3, gallery4]

  // Auto-change images when hovering
  useEffect(() => {
    let interval: any = null
    if (isHovering) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 1500) // Change image every 1.5 seconds
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isHovering, images.length])

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Reset to first image when not hovering
    setCurrentImageIndex(0)
  }

  return (
    <motion.section 
      className="relative bg-gradient-to-r from-[rgb(var(--color-primary-50))] to-[rgb(var(--color-accent-50))] dark:from-[rgb(var(--color-secondary-900))] dark:to-[rgb(var(--color-secondary-800))] py-20 md:py-32 overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(var(--color-primary-300))] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(var(--color-accent-300))] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div className="md:w-1/2 mb-12 md:mb-0" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-6">
              Premium <span className="text-[rgb(var(--color-primary-700))] dark:text-[rgb(var(--color-primary-300))]">Plywood</span> & Timber
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-200))] mb-8 max-w-lg">
              Sustainable, handcrafted wood products for discerning craftsmen and designers. 
              Beautiful materials that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products" 
                className="px-8 py-4 bg-[rgb(var(--color-primary-600))] hover:bg-[rgb(var(--color-primary-700))] text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Explore Products
              </Link>
              <Link 
                to="/quote" 
                className="px-8 py-4 bg-transparent border-2 border-[rgb(var(--color-primary-600))] text-[rgb(var(--color-primary-600))] hover:bg-[rgb(var(--color-primary-600))] hover:text-white font-medium rounded-xl transition-all duration-300 text-center dark:border-[rgb(var(--color-primary-400))] dark:text-[rgb(var(--color-primary-300))] dark:hover:bg-[rgb(var(--color-primary-400))] dark:hover:text-white"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={fadeIn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative">
               <div className="w-80 h-80 md:w-96 md:h-96 bg-[rgb(var(--color-primary-200))] dark:bg-[rgb(var(--color-secondary-700))] rounded-3xl shadow-2xl transform rotate-6 overflow-hidden">
                <motion.img 
                  key={`bottom-${currentImageIndex}`}
                  src={images[(currentImageIndex + 2) % images.length]} 
                  alt="Premium Plywood" 
                  className="w-full h-full object-cover opacity-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
              <div className="absolute top-0 left-0 w-80 h-80 md:w-96 md:h-96 bg-[rgb(var(--color-accent-200))] dark:bg-[rgb(var(--color-secondary-600))] rounded-3xl shadow-2xl transform -rotate-6 overflow-hidden">
                <motion.img 
                  key={`middle-${currentImageIndex}`}
                  src={images[(currentImageIndex + 1) % images.length]} 
                  alt="Premium Plywood" 
                  className="w-full h-full object-cover opacity-70"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="absolute top-4 left-4 w-80 h-80 md:w-96 md:h-96 bg-[rgb(var(--color-primary-300))] dark:bg-[rgb(var(--color-secondary-800))] rounded-3xl shadow-2xl transform rotate-3 overflow-hidden">
                <motion.img 
                  key={`top-${currentImageIndex}`}
                  src={images[currentImageIndex]} 
                  alt="Premium Plywood" 
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero