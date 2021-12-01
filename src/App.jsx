import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProjectMain from './pages/project/Main'
import CadetMain from './pages/cadet/Main'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/project" element={<ProjectMain />} />
          <Route path="/cadet" element={<CadetMain />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
