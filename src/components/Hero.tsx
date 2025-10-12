import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../Animations'

const Hero = () => {
  return (
    <motion.section 
      className="relative bg-gradient-to-r from-primary-50 to-accent-50 dark:from-secondary-900 dark:to-secondary-800 py-20 md:py-32 overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div className="md:w-1/2 mb-12 md:mb-0" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
              Premium <span className="text-primary-700 dark:text-primary-300">Plywood</span> & Timber
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 dark:text-secondary-200 mb-8 max-w-lg">
              Sustainable, handcrafted wood products for discerning craftsmen and designers. 
              Beautiful materials that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products" 
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Explore Products
              </Link>
              <Link 
                to="/quote" 
                className="px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium rounded-xl transition-all duration-300 text-center dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary-400 dark:hover:text-white"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>

          <motion.div className="md:w-1/2 flex justify-center" variants={fadeIn}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-primary-200 dark:bg-secondary-700 rounded-3xl shadow-2xl transform rotate-6"></div>
              <div className="absolute top-0 left-0 w-80 h-80 md:w-96 md:h-96 bg-accent-200 dark:bg-secondary-600 rounded-3xl shadow-2xl transform -rotate-6"></div>
              <div className="absolute top-4 left-4 w-80 h-80 md:w-96 md:h-96 bg-primary-300 dark:bg-secondary-800 rounded-3xl shadow-2xl transform rotate-3 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600857062241-98c0a9ed8f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Premium Plywood" 
                  className="w-full h-full object-cover"
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