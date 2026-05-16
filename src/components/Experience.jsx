const experienceData = [
    {
        role: ' Developer Intern',
        company: 'Tracksoft Solutions Pvt. Ltd.',
        period: 'Jan 2026 – Present',
        icon: 'fas fa-briefcase',
        description: 'Working on the EnrolMe platform, building frontend features and integrating REST APIs with backend systems. Contributing to developing scalable web applications using Angular, Spring Boot, and SQL.',
        skills: ['Angular', 'Spring Boot', 'SQL', 'Git']
    },
    // {
    //     role: 'Freelance Web Developer',
    //     company: 'Self-Employed',
    //     period: 'Jan 2023 – May 2024',
    //     icon: 'fas fa-laptop-code',
    //     description: 'Designed and built professional, high-performance websites for multiple local clients. Handled the entire process from Figma design to deployment and SEO optimization.',
    //     skills: ['HTML', 'CSS', 'JavaScript', 'Figma', 'SEO']
    // }
];

export default function Experience() {
    return (
        <section id="experience" className="exp-section reveal">
            {/* ── Header ── */}
            <div className="edu-header slide-in-up">
                <p className="edu-label">CAREER PATH</p>
                <h1 className="edu-title">Work Experience</h1>
                <hr className="edu-hr" />
                <p className="edu-subtitle">
                    My professional journey and the roles that have shaped my skills as a developer.
                </p>
            </div>

            {/* ── Timeline ── */}
            <div className="exp-timeline">
                {experienceData.map((item, i) => (
                    <div className="edu-item slide-in-up" key={i} style={{ '--delay': `${i * 0.3}s` }}>
                        <div className="edu-dot exp-dot">
                            <i className={item.icon}></i>
                        </div>
                        <div className="edu-card">
                            <div className="edu-card-header">
                                <div>
                                    <h3 className="edu-degree">{item.role}</h3>
                                    <p className="edu-institution" style={{ color: '#b3ffff' }}>
                                        <i className="fas fa-building" style={{ display: 'inline-block', color: '#00f5ff', marginRight: '5px' }}></i> {item.company}
                                    </p>
                                </div>
                                <div className="edu-meta">
                                    <span className="edu-period" style={{ display: 'block', marginBottom: '8px' }}>
                                        <i className="far fa-calendar-alt" style={{ display: 'inline-block', color: '#00f5ff', marginRight: '5px' }}></i> {item.period}
                                    </span>
                                </div>
                            </div>
                            <p className="edu-desc" style={{ display: 'block' }}>{item.description}</p>
                            <div className="edu-tags">
                                {item.skills.map((skill) => (
                                    <span key={skill} className="edu-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                {/* Reusing edu-line for the timeline stem */}
                <div className="edu-line"></div>
            </div>
        </section>
    );
}
