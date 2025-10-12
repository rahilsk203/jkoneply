import { useState } from 'react'
import { motion } from 'framer-motion'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    material: '',
    thickness: '',
    width: '',
    length: '',
    quantity: '',
    deliveryDate: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        phone: '',
        material: '',
        thickness: '',
        width: '',
        length: '',
        quantity: '',
        deliveryDate: '',
        message: ''
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="bg-white dark:bg-[rgb(var(--color-secondary-800))] rounded-3xl shadow-xl p-6 md:p-8 border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-700))]">
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-2">Quote Request Submitted!</h3>
          <p className="text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))] mb-6">
            Thank you for your request. Our team will review your specifications and contact you shortly.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-6 py-3 bg-[rgb(var(--color-primary-600))] hover:bg-[rgb(var(--color-primary-700))] text-white font-medium rounded-lg transition-colors duration-300"
          >
            Submit Another Request
          </button>
        </motion.div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-[rgb(var(--color-secondary-900))] dark:text-white mb-2">Request a Custom Quote</h2>
          <p className="text-[rgb(var(--color-secondary-600))] dark:text-[rgb(var(--color-secondary-300))] mb-8">
            Fill out the form below with your project specifications and we'll provide a detailed quote.
          </p>
          
          {submitError && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-800">
              {submitError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="material" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                  Material Type *
                </label>
                <select
                  id="material"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                >
                  <option value="">Select Material</option>
                  <option value="plywood">Plywood</option>
                  <option value="hardwood">Hardwood</option>
                  <option value="softwood">Softwood</option>
                  <option value="bamboo">Bamboo</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="thickness" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                  Thickness (mm) *
                </label>
                <input
                  type="number"
                  id="thickness"
                  name="thickness"
                  value={formData.thickness}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                  placeholder="12"
                />
              </div>
              
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                  Quantity *
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                  placeholder="10"
                />
              </div>
              
              <div>
                <label htmlFor="width" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                  Width (mm)
                </label>
                <input
                  type="number"
                  id="width"
                  name="width"
                  value={formData.width}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                  placeholder="600"
                />
              </div>
              
              <div>
                <label htmlFor="length" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                  Length (mm)
                </label>
                <input
                  type="number"
                  id="length"
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                  placeholder="1200"
                />
              </div>
              
              <div>
                <label htmlFor="deliveryDate" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                  Desired Delivery Date
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--color-secondary-700))] dark:text-[rgb(var(--color-secondary-300))] mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-[rgb(var(--color-secondary-50))] dark:bg-[rgb(var(--color-secondary-700))] border border-[rgb(var(--color-secondary-200))] dark:border-[rgb(var(--color-secondary-600))] rounded-xl focus:ring-2 focus:ring-[rgb(var(--color-primary-500))] focus:border-[rgb(var(--color-primary-500))] dark:focus:ring-[rgb(var(--color-primary-400))] dark:focus:border-[rgb(var(--color-primary-400))] transition-colors text-[rgb(var(--color-secondary-900))] dark:text-white focus:outline-none"
                placeholder="Any special requirements, finishing preferences, or additional information..."
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[rgb(var(--color-primary-600))] hover:bg-[rgb(var(--color-primary-700))] disabled:bg-[rgb(var(--color-primary-400))] text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Request Quote'
              )}
            </motion.button>
          </form>
        </>
      )}
    </div>
  )
}

export default QuoteForm