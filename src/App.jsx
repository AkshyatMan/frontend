import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import AboutPage from "./pages/AboutPage"
import "./index.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App

