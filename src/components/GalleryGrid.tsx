import { useState } from 'react'
import { motion } from 'framer-motion'
import type { GalleryItem } from '../data/gallery'
import { fadeIn } from '../Animations'

interface GalleryGridProps {
  items: GalleryItem[]
}

const GalleryGrid = ({ items }: GalleryGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  // Get unique categories
  const categories = ['All', ...new Set(items.map(item => item.category))]
  
  // Filter items by category
  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 dark:bg-secondary-800 dark:text-secondary-200 dark:hover:bg-secondary-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative pb-[100%]"> {/* 1:1 aspect ratio */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-secondary-200">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default GalleryGrid