import { useRef, useEffect } from 'react';

const useSpotlightEffect = (config) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let mouseX = -1000;
        let mouseY = -1000;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        const hexToRgb = (hex) => {
            // Small fallback in case it's not a hex code
            if (!hex.startsWith('#')) return '255,255,255';
            const bigint = parseInt(hex.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return `${r},${g},${b}`;
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (mouseX !== -1000 && mouseY !== -1000) {
                const gradient = ctx.createRadialGradient(
                    mouseX, mouseY, 0,
                    mouseX, mouseY, config.radius || 200
                );
                const rgbColor = hexToRgb(config.color || '#ffffff');
                gradient.addColorStop(0, `rgba(${rgbColor}, ${config.brightness || 0.15})`);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [config.radius, config.brightness, config.color]);

    return canvasRef;
};

export default function SpotlightCursor({ config = {}, className = '', ...rest }) {
    const spotlightConfig = {
        radius: 350,
        brightness: 0.15,
        color: '#ff4d6d', // Set to match your main red/pink theme!
        smoothing: 0.1,
        ...config,
    };

    const canvasRef = useSpotlightEffect(spotlightConfig);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                width: '100%',
                height: '100%'
            }}
            {...rest}
        />
    );
}
