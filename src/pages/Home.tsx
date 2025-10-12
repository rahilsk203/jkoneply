import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '@components/Hero'
import ProductCard from '@components/ProductCard'
import { staggerContainer, fadeIn } from '../Animations'
import products from '../data/products'

const Home = () => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4)

  return (
    <>
      <Helmet>
        <title>PylyWood - Premium Plywood & Timber</title>
        <meta name="description" content="Sustainable, handcrafted plywood and timber for discerning craftsmen and designers. Beautiful materials that stand the test of time." />
      </Helmet>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <Hero />

        {/* Featured Products */}
        <section className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                Discover our premium selection of plywood and timber, crafted with precision and sustainability in mind.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {featuredProducts.map((product, index) => (
                <motion.div key={product.id} variants={fadeIn} transition={{ delay: index * 0.1 }}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="text-center mt-12">
              <Link
                to="/products"
                className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Products
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div variants={fadeIn} className="lg:w-1/2">
                <div className="relative">
                  <div className="w-full h-96 bg-secondary-200 dark:bg-secondary-700 rounded-3xl shadow-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-200 dark:bg-primary-900/50 rounded-3xl shadow-xl"></div>
                  <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent-200 dark:bg-accent-900/50 rounded-3xl shadow-xl"></div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                  Sustainable Craftsmanship
                </h2>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6">
                  At PylyWood, we believe in responsible forestry and sustainable practices. Our materials are sourced 
                  from certified sustainable forests, ensuring that future generations can enjoy the beauty of natural wood.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-300">
                      FSC certified materials from responsibly managed forests
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-300">
                      Low-waste production processes and eco-friendly treatments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-300">
                      Carbon-neutral shipping and packaging solutions
                    </span>
                  </li>
                </ul>
                <Link
                  to="/about"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
                >
                  Learn more about our process
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-800 dark:to-accent-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Ready to Start Your Project?
              </motion.h2>
              <motion.p 
                variants={fadeIn}
                className="text-xl text-primary-100 mb-10"
              >
                Get a custom quote for your specific requirements and timeline.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/quote"
                  className="px-8 py-4 bg-white text-primary-700 hover:bg-secondary-100 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold rounded-xl transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Home