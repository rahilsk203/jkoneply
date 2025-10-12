import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import GalleryGrid from '../components/GalleryGrid'
import { staggerContainer, fadeIn } from '../Animations'
import gallery from '../data/gallery'

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - PylyWood</title>
        <meta name="description" content="Explore our gallery of completed projects showcasing the beauty and versatility of our plywood and timber products." />
      </Helmet>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-800 dark:to-accent-800 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Project Gallery
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Discover the beauty and versatility of our plywood and timber in real-world applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <GalleryGrid items={gallery} />
      </motion.div>
    </>
  )
}

export default Gallery