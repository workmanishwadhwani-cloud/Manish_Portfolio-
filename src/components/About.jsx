import ParallaxImage from './ParallaxImage';
import SignatureDraw from './SignatureDraw';

export default function About() {
    return (
        <section className="about reveal" id="about">
            <div className="about-info">
                <div className="img-about">
                    <img src="/Manish5.png" alt="Manish" />
                </div>
                <div className="info-text">
                    <h5>@Manish</h5>
                    <p>Frontend Developer</p>
                </div>
            </div>

            <h3 className="slide-in-up">ABOUT ME</h3>

            <div className="about-info2">
                <div className="about-text slide-in-left">
                    <p>Hi! I&apos;m Manish Wadhwani, a passionate Software Developer and Full-Stack Enthusiast based in Pune, India, who enjoys building modern web applications and solving real-world problems through technology.</p>
                    <p>I&apos;m currently a Third-year B.Tech student in Electronics and Telecommunication Engineering at Vishwakarma Institute of Information Technology (VIIT), Pune, where I&apos;ve developed a strong interest in building scalable web applications and solving real-world problems through technology.</p>
                    <p>I&apos;m particularly focused on full-stack development, backend systems, and modern web technologies that combine performance, usability, and clean design.</p>
                    <p>Right now, I&apos;m improving my skills in:</p>
                    <p><span>#</span> Java, Python, and TypeScript for backend and application development</p>
                    <p><span>#</span> Angular, HTML, CSS, and JavaScript for building responsive frontend applications</p>
                    <p><span>#</span> Spring Boot, REST APIs, and SQL for developing scalable backend systems</p>

                    {/* Unique Animated SVG Signature */}
                    <SignatureDraw />
                </div>
                <div
                    className="photo-container slide-in-right"
                    style={{ transform: 'translateY(-85px)', overflow: 'hidden' }}
                >
                    {/* <ParallaxImage
                        src="/Manish5.png"
                        alt="Manish"
                        style={{ width: '250px', height: '420px', borderRadius: '12px', display: 'block' }}
                        speed={0.12}
                    /> */}
                    <span className="tape tape1"></span>
                    <span className="tape tape2"></span>
                </div>
            </div>

        </section>
    );
}
