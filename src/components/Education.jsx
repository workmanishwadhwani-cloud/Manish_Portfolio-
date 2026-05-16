import HackerText from './HackerText';

const educationData = [
    {
        degree: 'Bachelor of Technology – Electronics and Telecommunication Engineering',
        institution: 'Vishwakarma Institute of Information Technology',
        period: '2023 – 2027',
        grade: null,
        icon: 'fas fa-university',
        description:
            'Focused on core electronics and communication fundamentals along with data structures, web technologies, and programming. Actively building real-world projects and expanding frontend development skills.',
        tags: ['Electronics', 'Web Dev', 'OOP', 'OS', 'DSA'],
    },
    {
        degree: 'Higher Secondary Certificate (HSC) – Science',
        institution: 'Maharashtra State Board',
        period: '2020 – 2022',
        grade: '78%',
        icon: 'fas fa-school',
        description:
            'Studied Physics, Chemistry, and Mathematics with a strong foundation in analytical thinking and problem-solving.',
        tags: ['Physics', 'Chemistry', 'Mathematics'],
    },
    {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Maharashtra State Board',
        period: '2019 – 2020',
        grade: '85%',
        icon: 'fas fa-graduation-cap',
        description:
            'Completed schooling with distinction, developing a strong academic base and interest in logical reasoning and technology.',
        tags: ['Science', 'Mathematics', 'English'],
    },
];

const certData = [
    {
        title: 'Google Student Ambassador',
        issuer: 'Google',
        date: '2026',
        icon: 'fas fa-certificate',
        color: '#00f5ff',
        link: 'https://drive.google.com/file/d/1ibsmdW0PaPzfaFHHz8u1OZ1w94YN4i6D/view?usp=sharing',
    },
    {
        title: 'JavaScript Algorithms & Data Structures',
        issuer: 'freeCodeCamp',
        date: '2023',
        icon: 'fab fa-js-square',
        color: '#f7df1e',
        link: '#',
    },
    {
        title: 'React – The Complete Guide',
        issuer: 'Udemy',
        date: '2024',
        icon: 'fab fa-react',
        color: '#61dafb',
        link: '#',
    },
    {
        title: 'UI/UX Design Fundamentals',
        issuer: 'Google / Coursera',
        date: '2024',
        icon: 'fas fa-pencil-ruler',
        color: '#b3ffff',
        link: '#',
    },
    {
        title: 'Git & GitHub Essentials',
        issuer: 'LinkedIn Learning',
        date: '2023',
        icon: 'fab fa-github',
        color: '#eaeaea',
        link: '#',
    },
];

export default function Education() {
    return (
        <section id="service" className="edu-section reveal">
            {/* ── Shared Header ── */}
            <div className="edu-header slide-in-up">
                <p className="edu-label">LEARNING &amp; ACHIEVEMENTS</p>
                <h1 className="edu-title"><HackerText text="Education & Certifications" delay={200} /></h1>
                <hr className="edu-hr" />
                <p className="edu-subtitle">
                    My academic journey and the certifications that sharpened my skills in design and development.
                </p>
            </div>

            {/* ── Two-column body ── */}
            <div className="edu-body">

                {/* ── LEFT: Education Timeline ── */}
                <div className="edu-col slide-in-left">
                    <h2 className="col-heading"><i className="fas fa-graduation-cap"></i> Education</h2>
                    <div className="edu-timeline">
                        {educationData.map((item, i) => (
                            <div className="edu-item slide-in-up" key={i} style={{ '--delay': `${i * 0.3}s` }}>
                                <div className="edu-dot">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="edu-card">
                                    <div className="edu-card-header">
                                        <div>
                                            <h3 className="edu-degree">{item.degree}</h3>
                                            <p className="edu-institution">
                                                <i className="fas fa-map-marker-alt"></i> {item.institution}
                                            </p>
                                        </div>
                                        <div className="edu-meta">
                                            <span className="edu-period">
                                                <i className="far fa-calendar-alt"></i> {item.period}
                                            </span>
                                            {item.grade && (
                                                <span className="edu-grade">{item.grade}</span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="edu-desc">{item.description}</p>
                                    <div className="edu-tags">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="edu-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="edu-line"></div>
                    </div>
                </div>

                {/* ── RIGHT: Certifications ── */}
                <div className="cert-col slide-in-right">
                    <h2 className="col-heading"><i className="fas fa-award"></i> Certifications</h2>
                    <div className="cert-list">
                        {certData.map((cert, i) => (
                            <a
                                href={cert.link}
                                className="cert-card slide-in-up"
                                key={i}
                                target="_blank"
                                rel="noreferrer"
                                style={{ '--delay': `${(i * 0.2) + 0.3}s` }}
                            >
                                <div className="cert-icon" style={{ color: cert.color, boxShadow: `0 0 18px ${cert.color}55` }}>
                                    <i className={cert.icon}></i>
                                </div>
                                <div className="cert-info">
                                    <h4 className="cert-title">{cert.title}</h4>
                                    <p className="cert-issuer">
                                        <i className="fas fa-building"></i> {cert.issuer}
                                    </p>
                                    <span className="cert-date">
                                        <i className="far fa-calendar-alt"></i> {cert.date}
                                    </span>
                                </div>
                                <i className="fas fa-external-link-alt cert-arrow"></i>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
