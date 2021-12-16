import { useState, useEffect } from 'react';
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
            return (setStartCardsCount(12), setAdditionalCards(3));
        }
        else if (width >= 768) {
            return (setStartCardsCount(8), setAdditionalCards(2));
        }
        else {
            return (setStartCardsCount(5), setAdditionalCards(2));
        }
    }, [width]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { width, startCardsCount, additionalCards }
}







