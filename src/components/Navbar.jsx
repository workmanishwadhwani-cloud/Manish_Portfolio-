import { useState, useEffect } from 'react';

const navLinks = [
    { id: 'home', label: 'Home', icon: 'fa-solid fa-circle-user' },
    { id: 'about', label: 'About', icon: 'fa-regular fa-address-card' },
    { id: 'experience', label: 'Experience', icon: 'fa-solid fa-briefcase' },
    { id: 'project', label: 'Projects', icon: 'fa-regular fa-folder-open' },
    { id: 'service', label: 'Education', icon: 'fa-solid fa-graduation-cap' },
    { id: 'contact', label: 'Contact', icon: 'fa-regular fa-envelope' },
];

export default function Navbar() {
    const [active, setActive] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let current = '';
            navLinks.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop - 200;
                    if (window.scrollY >= sectionTop) {
                        current = id;
                    }
                }
            });
            if (current) setActive(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setIsMenuOpen(false);
        const el = document.getElementById(id);
        if (el && window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -120, duration: 1.2 });
        } else if (el) {
            window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className="div-list">
                <div
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`ul-list ${isMenuOpen ? 'menu-open' : ''}`}>
                    {navLinks.map(({ id, label, icon }) => (
                        <li
                            key={id}
                            className={active === id ? 'active' : ''}
                            onClick={() => scrollTo(id)}
                        >
                            <i className={icon}></i>
                            <a href={`#${id}`} onClick={(e) => e.preventDefault()}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
