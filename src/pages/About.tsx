import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { staggerContainer, fadeIn } from '../Animations'

const About = () => {
  const values = [
    {
      title: "Sustainability",
      description: "We source only from certified sustainable forests and use eco-friendly treatments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Craftsmanship",
      description: "Each piece is carefully selected and processed to ensure the highest quality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Quality",
      description: "Rigorous quality control ensures every product meets our exacting standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Sourcing",
      description: "We partner with certified sustainable forests to source the finest raw materials."
    },
    {
      step: "02",
      title: "Processing",
      description: "Our state-of-the-art facilities process materials with precision and care."
    },
    {
      step: "03",
      title: "Quality Control",
      description: "Each product undergoes rigorous testing to meet our quality standards."
    },
    {
      step: "04",
      title: "Delivery",
      description: "Products are carefully packaged and delivered to ensure they arrive in perfect condition."
    }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - PylyWood</title>
        <meta name="description" content="Learn about PylyWood's commitment to sustainable craftsmanship and premium wood products." />
      </Helmet>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="pt-24"
      >
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-secondary-900 dark:to-secondary-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div variants={fadeIn} className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                  Our Story
                </h1>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6">
                  Founded in 2010, PylyWood began with a simple vision: to provide premium, sustainable wood products 
                  to craftsmen and designers who share our passion for quality and environmental responsibility.
                </p>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6">
                  What started as a small family business has grown into a trusted supplier for architects, 
                  furniture makers, and construction professionals across the region. Our commitment to 
                  sustainability and craftsmanship remains at the heart of everything we do.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-300 font-medium">FSC Certified</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-300 font-medium">Carbon Neutral</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="lg:w-1/2">
                <div className="relative">
                  <div className="w-full h-96 bg-secondary-200 dark:bg-secondary-700 rounded-3xl shadow-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-200 dark:bg-primary-900/50 rounded-3xl shadow-xl"></div>
                  <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent-200 dark:bg-accent-900/50 rounded-3xl shadow-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                These core principles guide every decision we make and every product we create.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                Our Process
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                From forest to finished product, we maintain the highest standards at every step.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-secondary-700 transform md:translate-x-0 -translate-x-1/2"></div>

              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg ml-20 md:ml-0 md:mr-20">
                      <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl transform md:translate-x-0 -translate-x-1/2">
                    {step.step}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                Passionate professionals dedicated to sustainable craftsmanship and exceptional service.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[1, 2, 3].map((_, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="h-64 bg-secondary-200 dark:bg-secondary-700"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                      {index === 0 ? 'Sarah Johnson' : index === 1 ? 'Michael Chen' : 'Emma Rodriguez'}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 mb-4">
                      {index === 0 ? 'Founder & CEO' : index === 1 ? 'Master Craftsman' : 'Sustainability Director'}
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      {index === 0 
                        ? 'With over 20 years in sustainable forestry, Sarah leads our vision for environmental responsibility.' 
                        : index === 1 
                        ? 'Michael brings traditional woodworking techniques to our modern processing facilities.' 
                        : 'Emma ensures all our practices meet the highest sustainability standards.'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default About