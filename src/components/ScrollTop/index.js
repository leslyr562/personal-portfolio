import React, { useEffect, useState } from 'react';


const ScrollToTop = () => {
    const [isVisible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageXOffset > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    };
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            <button className='top' type='button' onClick={scrollTop}>Scroll To Top ↑</button>
        </div>
    )
};

export default ScrollToTop;