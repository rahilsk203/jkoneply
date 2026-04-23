import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FlowPage from './pages/FlowPage'

function App() {
  return (
    <Router>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<FlowPage />} />
            <Route path="/flow" element={<FlowPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

