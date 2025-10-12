import { motion } from 'framer-motion'
import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
  onClick?: () => void
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-[rgb(var(--color-secondary-800))] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-700))]"
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
          <h3 className="text-xl font-semibold text-[rgb(var(--color-secondary-900))] dark:text-white">{product.name}</h3>
          <span className="text-lg font-bold text-[rgb(var(--color-primary-600))] dark:text-[rgb(var(--color-primary-300))]">₹{product.price.toLocaleString('en-IN')}</span>
        </div>
        <p className="text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-200))] mb-4 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-[rgb(var(--color-primary-100))] dark:bg-[rgb(var(--color-primary-900))] text-[rgb(var(--color-primary-800))] dark:text-[rgb(var(--color-primary-200))] text-sm rounded-full">
            {product.category}
          </span>
          <span className="px-3 py-1 bg-[rgb(var(--color-accent-100))] dark:bg-[rgb(var(--color-accent-900))] text-[rgb(var(--color-accent-800))] dark:text-[rgb(var(--color-accent-200))] text-sm rounded-full">
            {product.thickness}
          </span>
          <span className="px-3 py-1 bg-[rgb(var(--color-secondary-100))] dark:bg-[rgb(var(--color-secondary-700))] text-[rgb(var(--color-secondary-800))] dark:text-[rgb(var(--color-secondary-200))] text-sm rounded-full">
            {product.grade}
          </span>
        </div>
        <button className="w-full py-2 bg-[rgb(var(--color-primary-600))] hover:bg-[rgb(var(--color-primary-700))] text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:ring-offset-2 dark:focus:ring-offset-[rgb(var(--color-secondary-900))]">
          View Details
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard