import React, { useState, useEffect } from 'react';
import './Navbar.css';
import img from "landing-page-mn/assets/imgs/Logo/nitto-logo-bianco[Recuperato].png";
import { useLocation } from 'react-router-dom';


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false); // Stato per lo sfondo della navbar

    const location = useLocation()


    // Gestore dello scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150); // Cambia stato oltre i 150px
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    /*  */

    const scrollToSection = (id : string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    /*  */

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            {/* Logo */}
            <div className={location.pathname === "/"? "navbar-logo logo-left": "navbar-logo"}><a href="/"><img src={img} alt="img" className="logo" /> MARCO NITTO</a></div>

            {/* Menu Toggle per mobile */}
            <div className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </div>

            {/* Bottoni */}
            <div className={`navbar-buttons ${menuActive ? 'active' : ''}`}>
             
                {location.pathname != '/' && <button className="navbar-button" ><a href="/">Home</a></button>}
                <button className="navbar-button" onClick={() => scrollToSection('about')}>About</button>
                <button className="navbar-button" onClick={() => scrollToSection('gallery')}>Galleria</button>
                <button className="navbar-button" onClick={() => scrollToSection('servizi')}>I Miei Servizi</button>
                <button className="navbar-button" ><a href="/blog">Blog</a></button>
                <button className="navbar-button" onClick={() => scrollToSection('footer')}>Contattami</button>
            </div>
        </nav>
    );
}
