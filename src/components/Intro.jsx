import { useEffect, useRef, useState } from 'react';

// Animated counter hook
function useCountUp(target, duration = 1500, startDelay = 1800) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            const startTime = performance.now();
            const numericTarget = parseInt(target, 10);

            const animate = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.round(eased * numericTarget));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }, startDelay);

        return () => clearTimeout(delayTimer);
    }, [target, duration, startDelay]);

    return count;
}

export default function Intro({ onFinished }) {
    const introRef = useRef(null);

    // Animated stat counters
    const sectionCount = useCountUp(6, 1200, 1800);
    const renderTime = useCountUp(12, 1000, 2000);

    useEffect(() => {
        const animations = [
            { selector: '.top-tags', cls: 'from-top', delay: 0 },
            { selector: '.left h1', cls: 'from-left', delay: 0.3 },
            { selector: '.desc', cls: 'from-left', delay: 0.6 },
            { selector: '.live-line', cls: 'from-bottom', delay: 0.9 },
            { selector: '.intro-buttons', cls: 'zoom-in', delay: 1.2 },
            { selector: '.site-link', cls: 'from-bottom', delay: 1.5 },
            { selector: '.right', cls: 'from-right', delay: 0.6 },
            { selector: '.stats', cls: 'from-bottom', delay: 1.8 },
        ];

        animations.forEach(({ selector, cls, delay }) => {
            const el = document.querySelector(selector);
            if (el) {
                el.style.animationDelay = `${delay}s`;
                el.classList.add(cls);
            }
        });

        const timer = setTimeout(() => {
            if (introRef.current) {
                introRef.current.classList.add('smooth-out');
                setTimeout(() => {
                    onFinished();
                }, 1200);
            }
        }, 3800);

        return () => clearTimeout(timer);
    }, [onFinished]);

    // Navigate handler for interactive buttons
    const handleNavClick = (targetId) => {
        sessionStorage.setItem('intro-nav-target', targetId);
    };

    return (
        <div id="intro" ref={introRef}>
            <div className="main">
                <div className="card">
                    <div className="top-tags">
                        <span className="dot">● SYSTEM READY</span>
                        <span>PORTFOLIO 2026</span>
                        <span>UI LOADED</span>
                    </div>

                    <div className="content">
                        <div className="left">
                            <h1>
                                Welcome to <br />
                                my Portfolio <br />
                                Website
                            </h1>
                            <p className="desc">
                                Building modern, reliable, and fast digital experiences with a
                                focus on clean UI and solid engineering.
                            </p>
                            <div className="live-line">
                                <span className="live-dot">●</span>
                                <span>LIVE STATUS</span>
                            </div>
                            {/* ── Interactive Buttons ── */}
                            <div className="intro-buttons">
                                <div
                                    className="btn intro-btn"
                                    onClick={() => handleNavClick('project')}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <i className="fa-solid fa-code"></i> PROJECTS
                                </div>
                                <div
                                    className="btn intro-btn"
                                    onClick={() => handleNavClick('about')}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <i className="fa-solid fa-user"></i> ABOUT ME
                                </div>
                                <a
                                    className="btn intro-btn"
                                    href="https://github.com/workmanishwadhwani-cloud"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-github"></i> GITHUB
                                </a>
                            </div>
                            <div className="site-link">
                                <i className="fa-solid fa-globe"></i>
                                www.manish.dev
                            </div>
                        </div>

                        <div className="right">
                            <div className="right-head">
                                <span>CORE UI</span>
                                <span className="online">ONLINE</span>
                            </div>
                            <div className="orbit-box">
                                <div className="orbit">
                                    <i className="fa-solid fa-layer-group i1"></i>
                                    <i className="fa-solid fa-bolt i2"></i>
                                    <i className="fa-solid fa-code i3"></i>
                                    <i className="fa-solid fa-wifi i4"></i>
                                </div>
                                {/* ── Profile Avatar in Core ── */}
                                <div className="core core-avatar">
                                    <img
                                        src="/Manish5.png"
                                        alt="Manish Wadhwani"
                                        className="core-avatar-img"
                                    />
                                    <div className="core-avatar-ring"></div>
                                </div>
                            </div>
                            {/* ── Animated Stats ── */}
                            <div className="stats">
                                <div>
                                    <h4 className="stat-number">
                                        {String(sectionCount).padStart(2, '0')}
                                    </h4>
                                    <p>Sections</p>
                                </div>
                                <div>
                                    <h4 className="stat-number">
                                        {renderTime}ms
                                    </h4>
                                    <p>Render</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
