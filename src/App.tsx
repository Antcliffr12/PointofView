import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Layout from './Pages/Layout'
import About from './Pages/About';
import Home from './Pages/Home';
import Footer from './components/Footer';
function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
