import { motion } from 'framer-motion'
import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
  onClick?: () => void
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="relative pb-[75%]"> {/* 4:3 aspect ratio */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">{product.name}</h3>
          <span className="text-lg font-bold text-primary-600 dark:text-primary-400">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 text-sm rounded-full">
            {product.category}
          </span>
          <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/50 text-accent-800 dark:text-accent-200 text-sm rounded-full">
            {product.thickness}
          </span>
          <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-200 text-sm rounded-full">
            {product.grade}
          </span>
        </div>
        <button className="w-full py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300">
          View Details
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard