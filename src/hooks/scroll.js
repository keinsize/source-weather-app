import { useState, useRef, useEffect } from "react";

export function useScroll() {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const containerRef = useRef(null);

    const checkForScrollPosition = () => {
        const { current } = containerRef;
        if (current) {
            const { scrollLeft, scrollWidth, clientWidth } = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    };

    const scrollContainerBy = (distance) =>
        containerRef.current?.scrollBy({ left: distance, behavior: "smooth" });

    useEffect(() => {
        const { current } = containerRef;
        checkForScrollPosition();
        current?.addEventListener("scroll", checkForScrollPosition);

        return () => {
            current?.removeEventListener("scroll", checkForScrollPosition);
        };
    }, []);

    return { canScrollLeft, canScrollRight, containerRef, scrollContainerBy };
}
