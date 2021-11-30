import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectIndex from './pages/project/Main'

function App() {
  console.log(ProjectIndex)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectIndex />} />
      </Routes>
    </Router>
  )
}

export default App
