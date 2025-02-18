// Main App component with React Router setup for landing page versions
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPageA from './pages/LandingPageA'
import LandingPageB from './pages/LandingPageB'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageB />} />
        <Route path="/a" element={<LandingPageA />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
