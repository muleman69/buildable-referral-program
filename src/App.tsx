// Main App component with React Router setup for landing page versions
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPageA from './pages/LandingPageA'
import LandingPageB from './pages/LandingPageB'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageA />} />
        <Route path="/b" element={<LandingPageB />} />
      </Routes>
    </Router>
  )
}

export default App
