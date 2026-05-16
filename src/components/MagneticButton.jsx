import React, { useRef, useState } from 'react';

const MagneticButton = ({ children, className, onClick, style }) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = buttonRef.current.getBoundingClientRect();

        // Calculate middle point
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Move towards the mouse 
        setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
    };

    const handleMouseLeave = () => {
        // Snap back
        setPosition({ x: 0, y: 0 });
    };

    return (
        <button
            ref={buttonRef}
            className={className}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: position.x === 0 && position.y === 0 ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.1s linear',
            }}
        >
            {children}
        </button>
    );
};

export default MagneticButton;
