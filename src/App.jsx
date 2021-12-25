import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './components/Layout'
import ProjectMain from './pages/project/Main'
import CadetMain from './pages/cadet/Main'
import TeamMember from './pages/cadet/TeamMember'
import Feedback from './pages/cadet/Feedback'
import ProjectCreate from './pages/project/Create'
import ProjectEdit from './pages/project/Edit'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/project" element={<ProjectMain />} />
          <Route path="/project/:id" element={<ProjectEdit />} />
          <Route path="/project/create" element={<ProjectCreate />} />
          <Route path="/cadet" element={<CadetMain />} />
          <Route path="/cadet/:id" element={<TeamMember />} />
          <Route
            path="/cadet/:cadetId/:projectId/:id/feedback/:login"
            element={<Feedback />}
          />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
