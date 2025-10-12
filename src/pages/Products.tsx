import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import ProductCard from '../components/ProductCard'
import { staggerContainer, fadeIn } from '../Animations'
import products from '../data/products'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedGrade, setSelectedGrade] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Get unique categories and grades
  const categories = ['All', ...new Set(products.map(product => product.category))]
  const grades = ['All', ...new Set(products.map(product => product.grade))]

  // Filter products based on selections
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesGrade = selectedGrade === 'All' || product.grade === selectedGrade
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesCategory && matchesGrade && matchesSearch
    })
  }, [selectedCategory, selectedGrade, searchQuery])

  return (
    <>
      <Helmet>
        <title>Products - PylyWood</title>
        <meta name="description" content="Browse our premium selection of plywood and timber products. Find the perfect materials for your next project." />
      </Helmet>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="pt-24 pb-12"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Discover our premium selection of plywood and timber, crafted with precision and sustainability in mind.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={fadeIn} className="bg-white dark:bg-secondary-800 rounded-2xl shadow-lg p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-secondary-50 dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                    placeholder="Search by name or description..."
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Grade Filter */}
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Grade
                </label>
                <select
                  id="grade"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                >
                  {grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div key={product.id} variants={fadeIn} transition={{ delay: index * 0.1 }}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              variants={fadeIn}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">No products found</h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedGrade('All')
                  setSearchQuery('')
                }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  )
}

export default Products