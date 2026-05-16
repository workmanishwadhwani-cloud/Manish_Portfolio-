import { useEffect } from 'react';

import HackerText from './HackerText';

const skillsData = [
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38bdf8' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#ffffff' },
    // { name: 'Figma', icon: 'fab fa-figma', color: '#f24e1e' },
    { name: 'Node.js', icon: 'fab fa-node', color: '#339933' },
    { name: 'Next.js', icon: 'fas fa-caret-square-right', color: '#ffffff' },
    { name: 'Java', icon: 'fab fa-java', color: '#ffea06ff' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
    //     { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031ff' },
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section reveal">
            {/* ── Header ── */}
            <div className="edu-header slide-in-up" style={{ alignItems: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <p className="edu-label">MY TECH STACK</p>
                <h1 className="edu-title" style={{ color: '#00f5ff' }}><HackerText text="Technical Skills" delay={150} /></h1>
                <hr className="edu-hr" style={{ margin: '0 auto 18px' }} />
                <p className="edu-subtitle" style={{ textAlign: 'center' }}>
                    My development toolkit. Hover over the tiles to see them come to life!
                </p>
            </div>

            {/* ── Isometric 3D Grid ── */}
            <div className="iso-container slide-in-up">
                {skillsData.map((skill, index) => {
                    return (
                        <div
                            className="iso-item"
                            key={index}
                            style={{ '--clr': skill.color }}
                        >
                            <div className="iso-shadow"></div>
                            <div className="iso-top">
                                <i className={skill.icon}></i>
                            </div>
                            <span className="iso-name-tooltip">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
