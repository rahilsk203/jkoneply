import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { staggerContainer, fadeIn } from '../Animations'

const About = () => {
  const values = [
    {
      title: "Sustainability",
      description: "We source only from certified sustainable forests and use eco-friendly treatments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[rgb(var(--color-primary-600))] dark:text-[rgb(var(--color-primary-400))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Craftsmanship",
      description: "Each piece is carefully selected and processed to ensure the highest quality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[rgb(var(--color-primary-600))] dark:text-[rgb(var(--color-primary-400))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Quality",
      description: "Rigorous quality control ensures every product meets our exacting standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[rgb(var(--color-primary-600))] dark:text-[rgb(var(--color-primary-400))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <title>About Us - jkoneply</title>
        <meta name="description" content="Learn about jkoneply's commitment to sustainable craftsmanship and premium wood products." />
      </Helmet>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="pt-20"
      >
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-[rgb(var(--color-primary-50))] to-[rgb(var(--color-accent-50))] dark:from-[rgb(var(--color-secondary-900))] dark:to-[rgb(var(--color-secondary-800))]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div variants={fadeIn} className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-6">
                  Our Story
                </h1>
                <p className="text-lg text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))] mb-6">
                  Founded with a vision to provide premium, sustainable wood products, jkoneply began with a simple mission: 
                  to deliver exceptional plywood and timber solutions to craftsmen and designers who value both quality 
                  and environmental responsibility.
                </p>
                <p className="text-lg text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))] mb-8">
                  What started as a focused venture has grown into a trusted supplier for architects, 
                  furniture makers, and construction professionals. Our commitment to 
                  sustainability and craftsmanship remains at the heart of everything we do at jkoneply.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center bg-[rgb(var(--color-primary-50))] dark:bg-[rgb(var(--color-primary-900))]/30 rounded-full pl-2 pr-6 py-2">
                    <div className="w-10 h-10 bg-[rgb(var(--color-primary-100))] dark:bg-[rgb(var(--color-primary-900))]/50 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--color-primary-600))] dark:text-[rgb(var(--color-primary-400))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] font-medium">FSC Certified</span>
                  </div>
                  <div className="flex items-center bg-[rgb(var(--color-accent-50))] dark:bg-[rgb(var(--color-accent-900))]/30 rounded-full pl-2 pr-6 py-2">
                    <div className="w-10 h-10 bg-[rgb(var(--color-accent-100))] dark:bg-[rgb(var(--color-accent-900))]/50 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--color-accent-600))] dark:text-[rgb(var(--color-accent-400))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] font-medium">Carbon Neutral</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="lg:w-1/2">
                <div className="relative">
                  <div className="w-full h-96 bg-[rgb(var(--color-secondary-200))] dark:bg-[rgb(var(--color-secondary-700))] rounded-3xl shadow-xl overflow-hidden">
                    <img 
                      src="/src/assets/galleryImage/gallery1.jpg" 
                      alt="jkoneply Team" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[rgb(var(--color-primary-200))] dark:bg-[rgb(var(--color-primary-900))]/50 rounded-3xl shadow-xl overflow-hidden">
                    <img 
                      src="/src/assets/galleryImage/gallery2.jpg" 
                      alt="jkoneply Workshop" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -left-6 w-48 h-48 bg-[rgb(var(--color-accent-200))] dark:bg-[rgb(var(--color-accent-900))]/50 rounded-3xl shadow-xl overflow-hidden">
                    <img 
                      src="/src/assets/galleryImage/gallery3.jpg" 
                      alt="jkoneply Products" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))] max-w-2xl mx-auto">
                These core principles guide every decision we make and every product we create at jkoneply.
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
                  className="bg-white dark:bg-[rgb(var(--color-secondary-800))] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-700))] group"
                >
                  <div className="w-16 h-16 bg-[rgb(var(--color-primary-100))] dark:bg-[rgb(var(--color-primary-900))]/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[rgb(var(--color-primary-600))] group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))]">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-900))]/50">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-4">
                Our Process
              </h2>
              <p className="text-lg text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))] max-w-2xl mx-auto">
                From forest to finished product, we maintain the highest standards at every step at jkoneply.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[rgb(var(--color-primary-200))] dark:bg-[rgb(var(--color-secondary-700))] transform md:translate-x-0 -translate-x-1/2"></div>

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
                    <div className="bg-white dark:bg-[rgb(var(--color-secondary-800))] rounded-2xl p-8 shadow-lg ml-20 md:ml-0 md:mr-20 border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-700))]">
                      <h3 className="text-2xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-[rgb(var(--color-primary-600))] dark:bg-[rgb(var(--color-primary-500))] rounded-full flex items-center justify-center text-white font-bold text-xl transform md:translate-x-0 -translate-x-1/2 shadow-lg">
                    {step.step}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))] max-w-2xl mx-auto">
                Passionate professionals dedicated to sustainable craftsmanship and exceptional service at jkoneply.
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
                  className="bg-white dark:bg-[rgb(var(--color-secondary-800))] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="h-64 bg-[rgb(var(--color-secondary-200))] dark:bg-[rgb(var(--color-secondary-700))] overflow-hidden">
                    <img 
                      src={`/src/assets/galleryImage/gallery${index + 1}.jpg`} 
                      alt={`Team Member ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-2">
                      {index === 0 ? 'Sarah Johnson' : index === 1 ? 'Michael Chen' : 'Emma Rodriguez'}
                    </h3>
                    <p className="text-[rgb(var(--color-primary-600))] dark:text-[rgb(var(--color-primary-400))] mb-4">
                      {index === 0 ? 'Founder & CEO' : index === 1 ? 'Master Craftsman' : 'Sustainability Director'}
                    </p>
                    <p className="text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))]">
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

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[rgb(var(--color-primary-500))] to-[rgb(var(--color-accent-500))] dark:from-[rgb(var(--color-primary-700))] dark:to-[rgb(var(--color-accent-700))] rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your plywood and timber needs with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-[rgb(var(--color-primary-600))] hover:bg-[rgb(var(--color-secondary-100))] font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Get in Touch
                </a>
                <a 
                  href="/products" 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-xl transition-all duration-300 text-center"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default About