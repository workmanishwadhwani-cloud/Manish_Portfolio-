import { useState, useEffect } from 'react';

const Typewriter = ({ words, loop = true, typingSpeed = 100, deletingSpeed = 50, delay = 1500 }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let timer;
        const currentWord = words[loopNum % words.length];

        if (isDeleting) {
            timer = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && text === currentWord) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, delay);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, delay]);

    return (
        <span className="typewriter">
            {text}
            <span className="cursor" style={{ borderRight: '2px solid #00f5ff', animation: 'blink 1s infinite' }}>&nbsp;</span>
        </span>
    );
};

export default Typewriter;
