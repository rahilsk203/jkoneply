import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Pinterest', url: '#' },
    { name: 'LinkedIn', url: '#' }
  ]

  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Plywood', path: '/products' },
        { name: 'Timber', path: '/products' },
        { name: 'Specialty Woods', path: '/products' },
        { name: 'Accessories', path: '/products' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Process', path: '/about' },
        { name: 'Sustainability', path: '/about' },
        { name: 'Careers', path: '/about' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact', path: '/contact' },
        { name: 'FAQs', path: '/contact' },
        { name: 'Shipping', path: '/contact' },
        { name: 'Returns', path: '/contact' }
      ]
    }
  ]

  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-4 block">
              Pyly<span className="text-accent-600">Wood</span>
            </Link>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6 max-w-md">
              Premium plywood and timber solutions for discerning craftsmen and designers. 
              Sustainable, beautiful, and built to last.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-200 transition-colors"
                  aria-label={social.name}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM3 11a1 1 0 100 2h1a1 1 0 100-2H3z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-100 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-200 dark:border-secondary-800 mt-12 pt-8 text-center">
          <p className="text-secondary-600 dark:text-secondary-400">
            &copy; {currentYear} PylyWood. All rights reserved. Crafted with care for sustainable woodworking.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer