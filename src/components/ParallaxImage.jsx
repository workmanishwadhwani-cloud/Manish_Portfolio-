import React, { useEffect, useRef } from 'react';

export default function ParallaxImage({ src, alt, className, style, imgStyle, speed = 0.15 }) {
    const containerRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imgRef.current || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();

            // If the image container is vertically somewhat visible
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Calculate offset based on scroll position relative to center of screen
                const elementCenter = rect.top + rect.height / 2;
                const windowCenter = window.innerHeight / 2;
                const distanceFromCenter = windowCenter - elementCenter;

                const yOffset = distanceFromCenter * speed;
                // scale(1.15) to cover white edges while translating
                imgRef.current.style.transform = `translateY(${yOffset}px) scale(1.15)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial set
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                ...style,
                overflow: 'hidden',
                position: 'relative',
                display: 'inline-block', // so it matches typical img behaviors
            }}
        >
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                style={{
                    ...imgStyle,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translateY(0) scale(1.15)',
                    transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)',
                    willChange: 'transform',
                    display: 'block'
                }}
            />
        </div>
    );
}
