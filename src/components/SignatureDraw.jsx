import React, { useEffect, useRef, useState } from 'react';

export default function SignatureDraw() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 } // trigger when 50% visible
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ marginTop: '50px', width: '300px', height: '100px' }}>
            <svg viewBox="0 0 350 100" className={`signature-svg ${inView ? 'draw' : ''}`}>
                <text
                    x="10%"
                    y="60%"
                    fill="transparent"
                    stroke="#00f5ff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        fontFamily: '"Southmore", "Great Vibes", "Brush Script MT", cursive',
                        fontSize: '65px',
                        filter: 'drop-shadow(0 0 8px rgba(0, 245, 255, 0.6))'
                    }}
                >
                    W. Manish
                </text>
            </svg>
        </div>
    );
}
