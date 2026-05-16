import React, { useState, useEffect, useRef } from 'react';

// --- Data for the feature cards ---
const features = [
    {
        title: "MENTOR CONNECT",
        description: "Responsive mentorship platform connecting students with mentors through real-time messaging, session booking, and personalized guidance.",
        imageUrl: "/mentor-connect.png",
        bgColor: "#041520",
        textColor: "#d0d0d0",
        skills: ['React', 'Supabase', 'Next.js', 'Vercel'],
        github: "https://github.com/workmanishwadhwani-cloud",
        live: "https://mentorconnect-sigma-henna.vercel.app/",
        stars: 2,
        forks: 0,
    },
    {
        title: "CITY GUIDE",
        description: "Full-stack city exploration platform with interactive maps, secure authentication, and seamless booking/payment features.",
        imageUrl: "/mentor-connect.png",
        bgColor: "#061a28",
        textColor: "#d0d0d0",
        skills: ['HTML', 'Spring-Boot', 'React'],
        github: "https://github.com/workmanishwadhwani-cloud",
        live: "#",
        stars: 6,
        forks: 2,
    },
    {
        title: "Certificate Generator",
        description: "Full-stack web app that automates certificate generation and delivery. Supports bulk creation with customizable templates and email distribution.",
        imageUrl: "/Certificate.png",
        bgColor: "#031018",
        textColor: "#d0d0d0",
        skills: ['MERN', 'JavaScript'],
        github: "https://github.com/workmanishwadhwani-cloud",
        live: "#",
        stars: 3,
        forks: 0,
    },
    {
        title: "Crop Recommendation System",
        description: "AI-powered crop recommendation system that predicts suitable crops based on soil nutrients and climate conditions using Machine Learning.",
        imageUrl: "/Crop-Recommendation.png",
        bgColor: "#081e2e",
        textColor: "#d0d0d0",
        skills: ['Flask', 'Scikit-Learn', 'Python'],
        github: "https://github.com/workmanishwadhwani-cloud",
        live: "#",
        stars: 2,
        forks: 1,
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio to showcase my design and coding projects. Features smooth animations, responsive layout, and modern glassmorphism design.",
        imageUrl: "/Protfolio.png",
        bgColor: "#061a28",
        textColor: "#d0d0d0",
        skills: ['HTML', 'CSS', 'Bootstrap'],
        github: "https://github.com/workmanishwadhwani-cloud",
        live: "#",
        stars: 6,
        forks: 2,
    },
];

const useScrollAnimation = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
};

const AnimatedHeader = () => {
    const [headerRef, headerInView] = useScrollAnimation();

    return (
        <div className="edu-header reveal" style={{ alignItems: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '40px' }}>
            <p className="edu-label">PROJECTS</p>
            <h1
                ref={headerRef}
                className="edu-title"
                style={{
                    opacity: headerInView ? 1 : 0,
                    transform: headerInView ? 'translateY(0)' : 'translateY(40px)',
                    transition: 'all 1.2s ease'
                }}
            >
                Featured Work
            </h1>
            <hr className="edu-hr" style={{ margin: '0 auto 18px', width: '80px' }} />
            <p className="edu-subtitle" style={{ textAlign: 'center' }}>
                A showcase of my recent projects demonstrating expertise in full-stack development, modern frameworks, and creative problem-solving.
            </p>
        </div>
    );
};

export default function Projects() {
    return (
        <section className="project-section-new" id="project" style={{ padding: '80px 8%', width: '100%' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <AnimatedHeader />

                {/* The container for the sticky cards */}
                <div style={{ width: '100%', paddingTop: '40px' }}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="sticky-project-card stagger-card"
                            style={{
                                top: `${80 + index * 20}px`,
                                backgroundColor: feature.bgColor,
                                zIndex: index + 10,
                                animationDelay: `${index * 0.15}s`
                            }}
                        >
                            {/* Card Content (Left Side) */}
                            <div className="sticky-content">
                                <h3>{feature.title}</h3>
                                <p style={{ color: feature.textColor }}>{feature.description}</p>

                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                    {feature.skills.map((s, i) => (
                                        <span key={i} className="skill-tag">{s}</span>
                                    ))}
                                </div>

                                {/* GitHub Stats Mini Bar */}
                                <div className="project-github-stats">
                                    <span className="gh-stat">
                                        <i className="fas fa-star"></i> {feature.stars}
                                    </span>
                                    <span className="gh-stat">
                                        <i className="fas fa-code-branch"></i> {feature.forks}
                                    </span>
                                    <span className="gh-stat">
                                        <i className="fas fa-circle" style={{ color: '#7cffb2', fontSize: '8px' }}></i> Active
                                    </span>
                                </div>

                                {/* Action Buttons */}
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    <a
                                        href={feature.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-btn project-btn-outline"
                                    >
                                        <i className="fab fa-github"></i>View Code
                                    </a>
                                    {feature.live && feature.live !== '#' ? (
                                        <a
                                            href={feature.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-btn project-btn-primary"
                                        >
                                            <i className="fas fa-external-link-alt"></i>Live Demo
                                        </a>
                                    ) : (
                                        <span className="project-btn project-btn-coming">
                                            <i className="fas fa-clock"></i>Coming Soon
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Card Image (Right Side) — styled by .sticky-project-card > div:last-child in CSS */}
                            <div>
                                <img
                                    src={feature.imageUrl}
                                    alt={feature.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
