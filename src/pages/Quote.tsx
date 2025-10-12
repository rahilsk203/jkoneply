import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import QuoteForm from '../components/QuoteForm'
import { staggerContainer, fadeIn } from '../Animations'

const Quote = () => {
  return (
    <>
      <Helmet>
        <title>Get a Quote - PylyWood</title>
        <meta name="description" content="Request a custom quote for your plywood and timber project. Provide your specifications and we'll give you a detailed estimate." />
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
                Custom Project Quote
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Tell us about your project and we'll provide a detailed quote tailored to your specifications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-12 bg-secondary-50 dark:bg-secondary-900/50">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
              <QuoteForm />
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                Why Choose PylyWood for Your Project?
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                We combine premium materials with expert craftsmanship to deliver exceptional results.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Premium Materials",
                  description: "We source only the finest sustainably harvested wood species for superior quality and durability.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  )
                },
                {
                  title: "Expert Craftsmanship",
                  description: "Our skilled artisans bring decades of experience to every project, ensuring precision and attention to detail.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                },
                {
                  title: "Fast Turnaround",
                  description: "We understand the importance of deadlines and work efficiently to deliver your project on time.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Quote