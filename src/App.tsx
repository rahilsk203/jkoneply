import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App