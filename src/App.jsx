import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Receipe from './pages/Receipe';
import Header from './navBar/header';
import './index.css';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/receipes" element={<Receipe />} />
       <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
