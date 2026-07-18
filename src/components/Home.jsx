import Typewriter from './Typewriter';
import MagneticButton from './MagneticButton';
import ParallaxImage from './ParallaxImage';

export default function Home() {
    return (
        <section className="home" id="home">
            <p className="home-p">
                <span className="home-s">. </span>Available for work
            </p>
            <div className="home-container">
                <div className="home-section slide-in-left">
                    <div className="info-home">
                        <h1>
                            <span className="greeting-text">Hi, I&apos;m</span>{" "}
                            <span className="name-text">Manish</span>
                        </h1>
                        <h3 style={{ height: '35px', display: 'flex', alignItems: 'center' }}>
                            <Typewriter
                                words={[
                                    'Frontend Developer',
                                    'Full-Stack Enthusiast',
                                    'Creative Problem Solver'
                                ]}
                            />
                        </h3>
                        <div className="info-p">
                            <p>I&apos;m a passionate Software Developer who enjoys building functional, user-friendly web applications. I turn ideas into real products using clean code, modern technologies, and a strong focus on performance and usability.</p>
                        </div>
                        <div className="info-p2">
                            <p><i className="fa-solid fa-location-dot"></i> Based in India</p>
                            <p><i className="fa-solid fa-briefcase"></i> Available Now</p>
                        </div>
                        <div className="btnn">
                            <a href="#contact" onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el && window.__lenis) { window.__lenis.scrollTo(el, { offset: -120, duration: 1.2 }); } else if (el) { el.scrollIntoView({ behavior: 'smooth' }); } }}>
                                <MagneticButton className="btn-home1"><i className="fa-solid fa-arrow-right"></i> Hire Me</MagneticButton>
                            </a>
                            <a href="/Manish_wadhwani_resume(4).pdf" download="Manish_wadhwani_resume.pdf(4)" style={{ textDecoration: 'none' }}>
                                <MagneticButton className="btn-home2"><i className="fa-solid fa-download"></i> Download CV</MagneticButton>
                            </a>
                        </div>
                        <div className="hhr"><hr /></div>
                        <div className="follow">
                            <p className="followw">Follow me:</p>
                            <ul>
                                <li><a href="https://github.com/workmanishwadhwani-cloud" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-discord"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/manish-wadhwani/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/manish_wadhwani.18?igsh=MWxoZW9zemJtMGQ0bw==" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="slide-in-right">
                    <ParallaxImage
                        src="/Manishprofile.png"
                        alt="Manish Wadhwani"
                        className="home-img-wrapper"
                        style={{ width: '430px', height: '430px', borderRadius: '200px', boxShadow: '0 0 25px rgba(0, 245, 255, 0.4)' }}
                        speed={0.15}
                    />
                </div>
            </div>
        </section>
    );
}
