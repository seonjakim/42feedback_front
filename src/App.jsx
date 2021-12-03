import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProjectMain from './pages/project/Main'
import CadetMain from './pages/cadet/Main'
import TeamMember from './pages/cadet/TeamMember'
import Feedback from './pages/cadet/Feedback'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/project" element={<ProjectMain />} />
          <Route path="/cadet" element={<CadetMain />} />
          <Route path="/cadet/:id" element={<TeamMember />} />
          <Route path="/cadet/:id/feedback" element={<Feedback />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
