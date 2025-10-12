import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { fadeIn, staggerContainer } from '../Animations'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      title: "Address",
      content: "123 Timber Lane, Woodville, WV 24567",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Phone",
      content: "+1 (555) 123-4567",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email",
      content: "info@pylywood.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Business Hours",
      content: "Monday-Friday: 8am-6pm\nSaturday: 9am-4pm\nSunday: Closed",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>Contact Us - PylyWood</title>
        <meta name="description" content="Get in touch with PylyWood for inquiries about our products, custom orders, or project consultations." />
      </Helmet>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="pt-24 pb-12"
      >
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-secondary-900 dark:to-secondary-800">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-300">
                Have questions about our products or need help with a custom order? 
                Our team is here to assist you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={fadeIn}>
                <div className="bg-white dark:bg-secondary-800 rounded-3xl shadow-xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    Send us a Message
                  </h2>
                  
                  {submitSuccess ? (
                    <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-6 rounded-2xl mb-6">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Message sent successfully!</span>
                      </div>
                      <p className="mt-2">We'll get back to you as soon as possible.</p>
                    </div>
                  ) : null}
                  
                  {submitError ? (
                    <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-2xl mb-6">
                      {submitError}
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-700 border border-secondary-200 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={fadeIn}>
                <div className="bg-white dark:bg-secondary-800 rounded-3xl shadow-xl p-6 md:p-8 h-full">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-8">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mr-6">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                            {info.title}
                          </h3>
                          <p className="text-secondary-600 dark:text-secondary-300 whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="mt-12">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                      Our Location
                    </h3>
                    <div className="bg-secondary-100 dark:bg-secondary-700 rounded-2xl h-64 flex items-center justify-center">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <p className="text-secondary-600 dark:text-secondary-300">
                          Interactive map would appear here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Contact