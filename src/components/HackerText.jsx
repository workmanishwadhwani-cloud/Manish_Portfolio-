import React, { useState, useEffect, useRef } from 'react';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]|;:?,./";

export default function HackerText({ text, speed = 40, delay = 0 }) {
    const [displayText, setDisplayText] = useState(text);
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // triggers mapping once the element is slightly in view
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;

        let iteration = 0;
        let interval = null;

        const startAnimation = () => {
            interval = setInterval(() => {
                setDisplayText((prev) =>
                    prev
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            if (text[index] === ' ') return ' ';
                            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                    setDisplayText(text); // Force exact ending match
                }

                iteration += 1 / 3; // The hacker 'scramble' speed multiplier
            }, speed);
        };

        if (delay > 0) {
            setTimeout(startAnimation, delay);
        } else {
            startAnimation();
        }

        return () => clearInterval(interval);
    }, [inView, text, speed, delay]);

    return <span ref={ref} style={{ display: 'inline-block' }}>{displayText}</span>;
}
