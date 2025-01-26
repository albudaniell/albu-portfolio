import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import image from './assets/72705.jpeg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';



function App() {
    return (
        <Router basename='/albu-portfolio'>
            <div className="container">
                <header>
                    <a href="#" className="logo">Portfolio.</a>
                    <nav className="navbar-nav">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/projects" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Projects
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Contact
                        </NavLink>
                    </nav>
                </header>

                {/* Gestionarea rutelor */}
                <Routes>
                    {/* Ruta pentru pagina Home */}
                    <Route
                        path="/"
                        element={
                            <section className="home">
                                <div className="home-detail">
                                    <h1>Hey <span>I'am Daniel</span></h1>
                                    <h2>Frontend Developer</h2>
                                    <p>If you're interested in becoming a Frontend Developer, let's start learning!
                                    Learn HTML, CSS, JavaScript, and popular frameworks. Get useful information, tips, and resources to hone your skills in the world of web development.</p>

                                    <div className="download-social">
                                        <div className="download-btn">
                                            <a href="/cv.pdf" className="btn"  target="_blank" rel="noopener noreferrer">Download CV</a>
                                        </div>
                                        <div className="social-icons">
                                            <a href="https://www.instagram.com/albudaniell/#" target="_blank" rel="noopener noreferrer">
                                                <FaInstagram />
                                            </a>
                                            <a href="https://www.linkedin.com/in/albu-daniel-348052306/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin />
                                            </a>
                                            <a href="https://github.com/albudaniell" target="_blank" rel="noopener noreferrer">
                                                <FaGithub />
                                            </a>
                                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                                <FaYoutube />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='home-img'>
                                    <div className='img-box'>
                                        <img src={image} alt='My Image' />
                                    </div>
                                </div>
                            </section>
                        }
                    />
                    {/* Ruta pentru About */}
                    <Route path="/about" element={<About />} />
                     {/* Ruta pentru Contact */}
                    <Route path="/contact" element={<Contact />} />
                    {/* Ruta pentru Projects */}
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                
            </div>
        </Router>
    );
}

export default App;
