import { useState, useEffect } from 'react';
import { addCards, addCardsPc, initialMoviesMobile, initialMoviesPc, initialMoviesTablet } from './constants';
export function useResolution() {
    const [width, setWidth] = useState(0);
    const [startCardsCount, setStartCardsCount] = useState(0);
    const [additionalCards, setAdditionalCards] = useState(0);

    const handleResize = (e) => {
        setTimeout(() => {
            setWidth(e.target.innerWidth)
        }, 1000)
    }

    useEffect(() => {
        if (width >= 1280) {
            return (setStartCardsCount(initialMoviesPc), setAdditionalCards(addCardsPc));
        }
        else if (width >= 768) {
            return (setStartCardsCount(initialMoviesTablet), setAdditionalCards(addCards));
        }
        else {
            return (setStartCardsCount(initialMoviesMobile), setAdditionalCards(addCards));
        }
    }, [width]);

    useEffect(() => {
        setWidth(window.screen.width);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { width, startCardsCount, additionalCards }
}







